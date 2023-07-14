<template>
  <div>
      <h3><span>{{ $props.boardInfo.type }}</span>{{ $props.boardInfo.title }}</h3>
      <p>{{ $props.boardInfo.author }} | {{ $props.boardInfo.created_at }}</p>

      <div class="box textField01">
        <p
          v-if="$props.boardInfo.file_url"
          class="boardImgBox"
        >
          <img
              class="imgContent"
              :src="require('/upload/' + `${boardInfo.file_url}`)"
              alt="게시판 이미지">
        </p>
        <p>
          {{ $props.boardInfo.contents }}
        </p>
      </div>
  </div>
</template>

<style scoped>
  .textField01 {min-height: 10em;}
  img.imgContent {max-width: 50%;}
</style>

<script>
export default {
  props: ['boardInfo']
}
</script>
