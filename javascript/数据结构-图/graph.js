const graph = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3],
};

const visited = new Set();
// 深度优先遍历
const dfs = (n) => {
  console.log(n);
  visited.add(n);
  graph[n].forEach((i) => {
    if (!visited.has(i)) {
      dfs(i);
    }
  });
};

//广度优先遍历
const bfc = (n) => {
  const bVisited = new Set();
  const q = [2];
  bVisited.add(2);
  while (q.length) {
    const node = q.shift();
    console.log(node);
    graph[node].forEach((i) => {
      if (!bVisited.has(i)) {
        q.push(i);
        bVisited.add(i);
      }
    });
  }
};
