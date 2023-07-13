const naverMaps = {
  data: () => ({
    map: null
  }),
  beforeMount() {
    if (!window.naver) {
      this.loadScript()
    }
  },
  updated() {
    this.$nextTick(() => {
      this.loadMap()
    })
  },
  // mounted () {
  //   if (window.naver && window.naver.maps) {
  //     this.loadMap()
  //   } else {
  //     this.loadScript()
  //   }37.4917936!4d
  // },
  methods: {
    loadScript () {
      const script = document.createElement('script')
      // script.onload = () => naver.maps.load(this.loadMap)
      script.src =
        'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ybma8uv1s9'
      document.head.appendChild(script)
    },
    loadMap () {
      const container = document.getElementById('map')
      const mapOptions = {
        center: new naver.maps.LatLng(37.4917936, 126.9586124),
        zoom: 15
      }
      this.map = new naver.maps.Map(container, mapOptions)
    }
  }
}

export default naverMaps
