let img = document.getElementsByTagName("img")[0];
let range = [-10, 10];
let calculateDeg = function (range, el) {
  let {
    offsetX: targetX,
    offsetY: targetY,
    target: { offsetWidth: elW, offsetHeight: elH },
  } = el;
  let rangeTotal = range[1] - range[0];
  let degY = -rangeTotal * (targetX / elW) - range[0];
  let degX = rangeTotal * (targetY / elH) + range[0];
  return [degX, degY];
};
img.addEventListener(
  "mousemove",
  _.throttle(function (e) {
    let [x, y] = calculateDeg(range, e);
    img.style.setProperty("--rx", `${x}deg`);
    img.style.setProperty("--ry", `${y}deg`);
  }, 100)
);
