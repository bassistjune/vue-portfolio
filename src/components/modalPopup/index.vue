<template >
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <div class="modal--inner">
        <header class="modal-header">
          <span class="modal__title">{{ $props.title }}</span>
          <button @click="close" class="btn-close"><i class="icon pi pi-times"><span class="blind">닫기</span></i></button>
        </header>
        <section class="modal-body">
          <slot name="body"
          />
        </section>
        <footer class="modal-footer">
          <slot name="footer"
          />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    title: {
      type: String,
      required: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 980px) {
  .modal {
    margin: 4em auto;
  }
}
@media screen and (max-width: 736px) {
  .modal {
    margin: 3em 2em;
  }
}
.modal {
  position: relative;
  padding: 30px 30px 40px 30px;
  max-width: 640px;
  max-height: 80vh;
  width: 100%;
  z-index: 1000;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow-y: auto;
  &--inner {}
  &__title {
    font-weight: 600;
    font-size: 24px;
    display: block;
    color: var(--black-title);
    margin-bottom: 30px;
  }
  &-body {

  }
  &-footer {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }
}

.btn-close {
  position: absolute;
  top: 17px;
  right: 17px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color: #2196F3;
  background: transparent;
  padding: 0.2em;
  width: auto;
  height: auto;
  line-height: 1;
}
.btn-close i.icon {display: inline-block; letter-spacing: 0;}
</style>
