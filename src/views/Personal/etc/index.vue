<template>
  <div class="sub_wrap">
    <section class="etcComp">
      <article class="etcTxt">
        <h1>비공개 페이지</h1>
        <dl>
          <dt><strong>현 페이지는 당분간 비공개 입니다!</strong></dt>
          <dd>
            해당 페이지가 현재 접속이 불가하여<br />
            자동으로 이동합니다.
          </dd>
          <dd>
            <em class="bold">{{ limitedSecond - 1 }}</em>초후 메인페이지로 자동으로 이동 됩니다.
          </dd>
        </dl>
      </article>
      <button @click="moveMain()" class="btn_toMain"><span><em>{{ limitedSecond - 1 }}</em>초 후 이동..</span></button>
    </section>
  </div>
</template>
<style scoped>
section.etcComp {text-align: center;
}
article.etcTxt {
  text-align: center;
  padding: 0 20px;
}

.bold {font-weight: bold;}
.btn_toMain {}
span, em {text-decoration: none; font-style: normal;}
</style>
<script>
import autoMove from '@/components/mixins/pushToMain'
import metaSetting from '@/components/mixins/metaSet'
export default {
  mixins: [metaSetting, autoMove]
}
</script>
