class Tree {
  constructor(value) {
    this.root = new Node(value)
  }
}

class Node {
  chidren = []
  constructor(value) {
    this.value = value
  }

  push(value) {
    this.chidren.push(new Node(value))
  }
}
const tree = new Tree(50)
tree.root.chidren
tree.root.push(25)
tree.root.push(75)
tree.root.chidren[0].push(12)
tree.root.chidren[0].push(37)
tree.root.chidren[1].push(62)
tree.root.chidren[1].push(87)
