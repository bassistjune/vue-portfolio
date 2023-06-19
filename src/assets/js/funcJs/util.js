const utilJQFunc = () => {
  (($) => {
    /**
     * Generate an indented list of links from a nav. Meant for use with panel().
     * @return {jQuery} jQuery object.
     */
    $.fn.navList = function () {
      const $this = $(this);
      const $a = $this.find("a");
      const b = [];
  
      $a.each(function () {
        const $this = $(this);
        const indent = Math.max(0, $this.parents("li").length - 1);
        const href = $this.attr("href");
        const target = $this.attr("target");
  
        b.push(
          `<a class="link depth-${indent}"${typeof target !== "undefined" && target !== "" ? ` target="${target}"` : ""}${typeof href !== "undefined" && href !== "" ? ` href="${href}"` : ""}>` +
            `<span class="indent-${indent}"></span>` +
            $this.text() +
            "</a>"
        );
      });
  
      return b.join("");
    };
  
    /**
     * Panel-ify an element.
     * @param {object} userConfig User config.
     * @return {jQuery} jQuery object.
     */
    $.fn.panel = function (userConfig) {
      // No elements?
      if (this.length === 0) return $this;
  
      // Multiple elements?
      if (this.length > 1) {
        for (let i = 0; i < this.length; i++) $(this[i]).panel(userConfig);
  
        return $this;
      }
  
      // Vars.
      const $this = $(this);
      const $body = $("body");
      const $window = $(window);
      const id = $this.attr("id");
      let config;
  
      // Config.
      config = $.extend(
        {
          // Delay.
          delay: 0,
  
          // Hide panel on link click.
          hideOnClick: false,
  
          // Hide panel on escape keypress.
          hideOnEscape: false,
  
          // Hide panel on swipe.
          hideOnSwipe: false,
  
          // Reset scroll position on hide.
          resetScroll: false,
  
          // Reset forms on hide.
          resetForms: false,
  
          // Side of viewport the panel will appear.
          side: null,
  
          // Target element for "class".
          target: $this,
  
          // Class to toggle.
          visibleClass: "visible",
        },
        userConfig
      );
  
      // Expand "target" if it's not a jQuery object already.
      if (!(config.target instanceof Object)) config.target = $(config.target);
  
      // Panel.
  
      // Methods.
      $this._hide = function (event) {
        // Already hidden? Bail.
        if (!config.target.hasClass(config.visibleClass)) return;
  
        // If an event was provided, cancel it.
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        // Hide.
        config.target.removeClass(config.visibleClass);
  
        // Post-hide stuff.
        window.setTimeout(() => {
          // Reset scroll position.
          if (config.resetScroll) $this.scrollTop(0);
  
          // Reset forms.
          if (config.resetForms)
            $this.find("form").each(function () {
              this.reset();
            });
        }, config.delay);
      };
  
      // Vendor fixes.
      $this
        .css("-ms-overflow-style", "-ms-autohiding-scrollbar")
        .css("-webkit-overflow-scrolling", "touch");
  
      // Hide on click.
      if (config.hideOnClick) {
        $this.find("a").css("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  
        $this.on("click", "a", function (event) {
          const $a = $(this);
          const href = $a.attr("href");
          const target = $a.attr("target");
  
          if (!href || href === "#" || href === "" || href === `#${id}`) return;
  
          // Cancel original event.
          event.preventDefault();
          event.stopPropagation();
  
          // Hide panel.
          $this._hide();
  
          // Redirect to href.
          window.setTimeout(() => {
            if (target === "_blank") window.open(href);
            else window.location.href = href;
          }, config.delay + 10);
        });
      }
  
      // Event: Touch stuff.
      $this.on("touchstart", function (event) {
        $this.touchPosX = event.originalEvent.touches[0].pageX;
        $this.touchPosY = event.originalEvent.touches[0].pageY;
      });
  
      $this.on("touchmove", function (event) {
        if ($this.touchPosX === null || $this.touchPosY === null) return;
  
        const diffX = $this.touchPosX - event.originalEvent.touches[0].pageX;
        const diffY = $this.touchPosY - event.originalEvent.touches[0].pageY;
        const th = $this.outerHeight();
        const ts = $this.get(0).scrollHeight - $this.scrollTop();
  
        // Hide on swipe?
        if (config.hideOnSwipe) {
          let result = false;
          const boundary = 20;
          const delta = 50;
  
          switch (config.side) {
            case "left":
              result = diffY < boundary && diffY > -boundary && diffX > delta;
              break;
  
            case "right":
              result = diffY < boundary && diffY > -boundary && diffX < -delta;
              break;
  
            case "top":
              result = diffX < boundary && diffX > -boundary && diffY > delta;
              break;
  
            case "bottom":
              result = diffX < boundary && diffX > -boundary && diffY < -delta;
              break;
  
            default:
              break;
          }
  
          if (result) {
            $this.touchPosX = null;
            $this.touchPosY = null;
            $this._hide();
  
            return false;
          }
        }
  
        // Prevent vertical scrolling past the top or bottom.
        if (($this.scrollTop() < 0 && diffY < 0) || (ts > th - 2 && ts < th + 2 && diffY > 0)) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
  
      // Event: Prevent certain events inside the panel from bubbling.
      $this.on("click touchend touchstart touchmove", function (event) {
        event.stopPropagation();
      });
  
      // Event: Hide panel if a child anchor tag pointing to its ID is clicked.
      $this.on("click", `a[href="#${id}"]`, function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        config.target.removeClass(config.visibleClass);
      });
  
      // Body.
  
      // Event: Hide panel on body click/tap.
      $body.on("click touchend", function (event) {
        $this._hide(event);
      });
  
      // Event: Toggle.
      $body.on("click", `a[href="#${id}"]`, function (event) {
        event.preventDefault();
        event.stopPropagation();
  
        config.target.toggleClass(config.visibleClass);
      });
  
      // Window.
  
      // Event: Hide on ESC.
      if (config.hideOnEscape)
        $window.on("keydown", function (event) {
          if (event.keyCode === 27) $this._hide(event);
        });
  
      return $this;
    };
  })(jQuery);
  

}

export default { utilJQFunc }