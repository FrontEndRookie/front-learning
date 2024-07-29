async function esm() {
  const string = await esmBabel();
  console.log(string);
  return 'success';
}
function esmBabel() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello world');
    }, 2000);
  });
}
export default esm;
