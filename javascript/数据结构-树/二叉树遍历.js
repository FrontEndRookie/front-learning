const { bt } = require("./bt");
//先序遍历
const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};

preOrder(bt); // 124859367
console.log("------");
//中序遍历
const midOrder = (root) => {
  if (!root) return;
  midOrder(root.left);
  console.log(root.val);
  midOrder(root.right);
};

midOrder(bt); // 842591637

console.log("------");
//后序遍历
const postOrder = (root) => {
  if (!root) return;
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
};

postOrder(bt); //849526731
