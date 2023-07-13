<template>
  <div class="toolbar">
    <div class="search-wrapper">
      <div class="counter">
        Total photos: <span ref="listCount"></span>
      </div>
    </div>
    <ul class="view-options">
      <li
          v-show="showRange == true"
          class="zoom">
        <input class="rangeCustom" type="range" min="180" max="380" value="280">
      </li>
      <li class="show-grid active">
        <button
            @click="rangeSwitch(true)"
            class="lessShadow">
          <i class="icon pi pi-th-large"><span>그리드 형태로 보기</span></i>
        </button>
      </li>
      <li class="show-list">
        <button
            @click="rangeSwitch(false)"
            class="lessShadow">
          <i class="icon pi pi-list"><span>리스트 형태로 보기</span></i>
        </button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
/* input[type="range"] customStyle */
input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  /*  overflow: hidden;  remove this line*/

  /* New additions */
  height: 6px;
  background: #ccc;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none;
  /* creating a custom design */
  height: 15px;
  width: 15px;
  background-color: #f50;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #f50;
  border-radius: 50%;
  border: none;

  /* box-shadow: -407px 0 0 400px #f50; emove this line */
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(255,85,0, .1)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(255,85,0, .2)
}
/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(255,85,0, .1)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(255,85,0, .2)
}
/* input[type="range"] customStyle */

.toolbar {display: flex; justify-content: space-between; align-items: center; margin-top: 10px;}
.view-options {display: flex; align-items:center;}
.view-options li:not(:last-child) {margin-right: 1.2rem;}
.view-options button {padding: 2px; border: 3px solid transparent;}
.view-options .active button {border-color: var(--deepBlue); line-height: 1; height: auto; padding: 0.3em;}
.lessShadow {box-shadow: none;}
li {list-style: none;}
.counter {white-space: nowrap;}
@media screen and(max-width: 900px) {
  .toolbar input[type="range"] {display: none;}
}

</style>
<script>
export default {
  props: ['listLength'],
  data: () => ({
    showRange: true
  }),
  watch: {
    showRange: {
      handler (v) {
        console.log('vvvvvvvvvvvvv', v)
      }
    }
  },
  mounted () {
    this.$refs.listCount.textContent = this.listLength
  },
  methods: {
    rangeSwitch (p) {
      this.showRange = p
      console.log('스위치 작동 :', this.showRange)
    }
  }
}
</script>
