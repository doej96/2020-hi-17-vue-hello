new Vue({
  el: '#app',
  data: {
    title: 'Vue | Page형식으로 맛보기',
    titleSub: '이미지 검색',
    search: '',
  },
  methods: {
    onSearchRemove(e) {
      this.search = ''; //vue는 변수값이 바뀌면 바뀜! 변수값을 바꾼다는 생각으로
    }
  }
})