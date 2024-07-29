const { bt } = require("./bt");
// const preOrder = (root) => {
//     if (!root) return;
//     console.log(root.val);
//     preOrder(root.left);
//     preOrder(root.right);
//   };

const preOrder = (root) => {
  //前序遍历
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    console.log(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
};
// preOrder(bt);

const midOrder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root;
  while (p || stack.length) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    p = stack.pop();
    console.log(p.val);
    p = p.right;
  }
};
// midOrder(bt);

const postOrder = (root) => {
  let stack = [root];
  let reverseStack = [];
  while (stack.length) {
    let node = stack.pop();
    reverseStack.push(node);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }
  while (reverseStack.length) {
    console.log(reverseStack.pop().val);
  }
};

postOrder(bt);
