const PhotoAlbumFunc = () => {
  const imageList = document.querySelector('.image-list')
  const btns = document.querySelectorAll('.view-options button')
  const active = 'active'
  const listView = 'list-view'
  const gridView = 'grid-view'
  // const dNone = 'd-none'

  // 버튼활성화
  for (const btn of btns) {
    btn.addEventListener('click', function () {
      const parent = this.parentElement
      document.querySelector('.view-options .active').classList.remove(active)
      parent.classList.add(active)

      if (parent.classList.contains('show-list')) {
        // parent.previousElementSibling.previousElementSibling.classList.add(dNone)
        imageList.classList.remove(gridView)
        imageList.classList.add(listView)
      } else {
        // parent.previousElementSibling.classList.remove(dNone)
        imageList.classList.remove(listView)
        imageList.classList.add(gridView)
      }
    })
  }

  // 리스트 너비 조절 Range 스크립트
  const rangeInput = document.querySelector('input[type="range"]')

  rangeInput.addEventListener('input', function () {
    document.documentElement.style.setProperty('--minRangeValue', `${this.value}px`)
  })
}

export default { PhotoAlbumFunc }
