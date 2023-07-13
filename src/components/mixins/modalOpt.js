import Modal from '@/components/modalPopup/index'
const ModalOption = {
  name: 'modalOpt',
  data () {
    return {
      isShowModal: false
    }
  },
  components: {
    Modal
  },
  mounted () {
    console.log('a')
  },
  methods: {
    close () {
      this.isShowModal = false
    },
    callModal (a) {
      this.isShowModal = true
      this.modalType = a
    }
  }
}

export default ModalOption
