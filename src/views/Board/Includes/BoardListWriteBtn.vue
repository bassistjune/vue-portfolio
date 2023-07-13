<template>
  <div class="writeBox">
    <button class="btnWrite onRight" @click="sendWrite()" type="button">글쓰기</button>
  </div>
</template>

<style scoped>
.writeBox {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
@media screen and (max-width: 736px) {
  .writeBox {
    position: static;
    right: auto;
    top: auto;
    margin-left: auto;
    transform: translateY(0);
  }
}
</style>
<script>
export default {
  methods: {
    sendWrite () {
      this.$emit('fnWrite')
    }
  }
}
</script>
