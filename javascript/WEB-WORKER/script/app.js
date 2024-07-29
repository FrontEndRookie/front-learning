if (window.Worker) {
  const worker = new Worker('/script/worker.js')
  worker.postMessage('')
  console.log(worker)
  const App = {
    data () {
      return {
        counter: 0
      }
    },
    mounted () {
      worker.onmessage = (e) => {
        this.counter = e.data
        console.log(e.data)
      }
    },
    methods: {
     
    }
  }

  Vue.createApp(App).mount('#app')
}
