function numAnimate(duration, start, end, callBack) {
  let speed = (end - start) / duration;
  let time = Date.now();
  function change() {
    let currentTime = Date.now();
    let passTime = currentTime - time;
    if (passTime >= duration) {
      callBack(end);
      return;
    }
    let value = speed * passTime + start;
    callBack(value.toFixed(2));
    requestAnimationFrame(change);
  }
  change();
}
