<template>
  <div class="galleryWrap sub_wrap">
    <PhBtn :listLength="itemsLength"></PhBtn>
    <PhList :phLists="items"></PhList>
  </div>
</template>
<style>
:root {
  --black: #1a1a1a;
  --white: #fff;
  --gray: #ccc;
  --deepBlue: #119fcd;
  --lightBg: #eff1f2;
  --darkblack: rgba(0,0,0,0.8);
  --minRangeValue: 280px;
}
.galleryWrap {
  margin: 0;
  color: var(--black);
  font: 1rem/1.3 sans-serif;
}
</style>

<script>
import metaSetting from '@/components/mixins/metaSet'
import PhBtn from './Include/photoBtn'
import PhList from './Include/photoList'
import photoItems from '@/cofig/PhotoList'
import plFuncJs from './Include/photoFunc'
export default {
  mixins: [metaSetting],
  components: {
    PhBtn,
    PhList
  },
  computed: {
    items () {
      return photoItems
    },
    itemsLength () {
      return photoItems.length
    }
  },
  data: () => ({}),
  mounted () {
    plFuncJs.PhotoAlbumFunc()
  },
  updated () {
    plFuncJs.PhotoAlbumFunc()
  }
}

</script>
