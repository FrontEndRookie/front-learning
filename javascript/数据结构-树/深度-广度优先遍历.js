const tree = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};

const dfs = (tree) => {
  console.log(tree.val);
  tree.children.forEach(dfs);
};

dfs(tree); // 输出：a b d e c f g

const bfs = (tree) => {
  const queue = [tree];
  while (queue.length) {
    const node = queue.shift();
    console.log(node.val);
    node.children.forEach((child) => queue.push(child));
  }
};
console.log("----");
bfs(tree); //a b c d e f g
