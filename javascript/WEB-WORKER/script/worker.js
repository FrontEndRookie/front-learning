onmessage = (e) => {
  let counter = 0
  console.time()
  for(let i=0;i<100000000000;i++) {
    counter += 10
  }
  console.timeEnd()
  postMessage(counter)
}
