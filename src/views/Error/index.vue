<template>
  <section class="errorComp">
    <article class="errorTxt">
      <h1>404</h1>
      <dl>
        <dt><strong>찾으시는 페이지가 없습니다.</strong></dt>
        <dd>
          잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다.<br />
          입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.
        </dd>
        <dd>
          <em class="bold">{{ limitedSecond - 1 }}</em>초후 메인페이지로 자동으로 이동 됩니다.
        </dd>
      </dl>
    </article>
    <button @click="moveMain()" class="btn_toMain"><span><em>{{ limitedSecond - 1 }}</em>초 후 이동..</span></button>
  </section>
</template>
<style scoped>
section.errorComp {text-align: center;
}
article.errorTxt {
  text-align: center;
  padding: 0 20px;
}

.bold {font-weight: bold;}
.btn_toMain {}
span, em {text-decoration: none; font-style: normal;}
</style>
<script>
export default {
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
  beforeDestroy () {
    this.limitedSecond = 8
    if (this.timer) return clearInterval(this.timer)
  },
  methods: {
    moveMain () {
      this.$router.push('/')
    }
  }
}
</script>
