const autoMove = {
  data: () => ({
    limitedSecond: 8,
    timer: undefined
  }),
    // watch: {
    // }
    mounted () {
    this.timer = setInterval(() => {
      this.limitedSecond -= 1
      if (this.limitedSecond <= 0) {
        this.$router.push('/')
        clearInterval(this.timer)
        return false
      }
    }, 1000)
  },
  beforeUnmount () {
    this.limitedSecond = 8
    if (this.timer) return clearInterval(this.timer)
  },
  methods: {
    moveMain () {
      this.$router.push('/')
    }
  }
}

export default autoMove