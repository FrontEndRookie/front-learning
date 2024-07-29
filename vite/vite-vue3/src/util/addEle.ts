export function render() {
  const el = document.createElement('div')
  el.innerHTML = 'hello world123321231'
  document.body.appendChild(el)
}
render()
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render()
  })
}
