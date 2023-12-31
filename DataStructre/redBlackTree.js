export class RedBlackTree {
  root = null;

  #insert(node, value) {
    if (node.value > value) {
      // 루트노드보다 작은 값이면
      if (node.left) {
        return this.#insert(node.left, value);
      } else {
        const newNode = new Node(value, "red");
        newNode.parent = node;
        node.left = newNode;
        return newNode;
      }
    } else {
      // 루트노드보다 큰 값이면
      if (node.right) {
        return this.#insert(node.right, value);
      } else {
        const newNode = new Node(value, "red");
        newNode.parent = node;
        node.right = newNode;
        return newNode;
      }
    }
  }
  #recolor(node) {
    if(node.parent) {
      node.parent.color = 'black'
    }
    if (node.getUncle()) {
      node.getUncle().color = 'black'
    }
    if (node.parent?.parent) {
      node.parent.parent.color = 'red'
    }
  }
  #restructure() {}
  insert(value) {
    // 어떤 값을 넣으려할때, 일단 어디에 넣을지 모르겠다.
    // 그래서 왼팔, 오른팔한테 맡긴다.
    // 근데 만약 왼팔 오른팔이 없으면 거기다가 넣는다.
    if (!this.root) {
      this.root = new Node(value, "black");
    } else {
      const newNode = this.#insert(this.root, value);
      if (newNode.color === "red" && newNode.parent.color === "red") {
        if (newNode.getUncle().color == "red") {
          this.#recolor(newNode);
        } else if (newNode.getUncle().color == "black") {
          this.#restructure(newNode);
        } else if (!newNode.getUncle()) {
          this.#restructure(newNode);
        }
      }
    }
    // 숙제: 이미 넣은 값을 넣은 경우 에러 처리(alert, throw)
  }

  #search(node, value) {
    if (node.value > value) {
      // 더 작은값 찾을때
      if (!node.left) {
        return null;
      }
      if (node.left.value === value) {
        return node.left;
      }
      return this.#search(node.left, value);
    } else {
      if (!node.right) {
        return null;
      }
      if (node.right.value === value) {
        return node.right;
      }
      return this.#search(node.right, value);
    }
  }

  search(value) {
    // 어떤 값을 찾으려할때, 일단 어디에 있는지 모르겠다.
    // 그래서 왼팔, 오른팔한테 맡긴다.
    // 찾으면 그 노드 return, 못찾으면 null return
    if (!this.root) {
      return null;
    }
    if (this.root.value === value) {
      return this.root;
    }
    return this.#search(this.root, value);
  }

  #remove(node, value) {
    if (!node) {
      // 제거할 값이 bst에 존재하지 않는 경우
      return null; // 지울 값이 존재 안 하면 false return
    }
    if (node.value === value) {
      // 자식 입장
      // 지울 값을 찾은 경우
      if (!node.left && !node.right) {
        // 1. 양팔 x
        return null;
      } else if (!node.left) {
        // 2.왼팔만 없는 경우
        return node.right;
      } else if (!node.right) {
        // 3.오른팔만 없는 경우
        return node.left;
      } else {
        // 4. 양팔 다 있는 경우
        let exchange = node.left;
        while (exchange.right) {
          exchange = exchange.right;
        }
        const temp = node.value;
        node.value = exchange.value;
        exchange.value = temp;
        node.left = this.#remove(node.left, temp);
        return node;
      }
    } else {
      // 부모 입장
      if (node.value > value) {
        node.left = this.#remove(node.left, value);
        return node;
      } else {
        node.right = this.#remove(node.right, value);
        return node;
      }
    }
  }
  remove(value) {
    // 1. leaf(양팔 다 없음) -> 제거
    // 2. leaf x, 왼팔이 없다 -> 오른팔 끌어올린다
    // 3. leaf x, 오른팔이 없다 -> 왼팔 끌어올린다
    // 4. leaf x, 양팔 다 있다 -> 왼팔에서 가장 큰 애와 바꾼다,leaf를 지운다
    this.root = this.#remove(this.root, value);
    return; // 숙제로 length return하게
  }
}
class Node {
  left = null;
  right = null;
  parent = null;
  constructor(value, color = "red") {
    this.value = value;
    this.color = color``;
  }
  getUncle() {
    if (this.parent?.parent?.left === this.parent) {
      return this.parent?.parent?.right;
    } else if (this.parent?.parent?.right === this.parent) {
      return this.parent?.parent?.left
    }
  }
}
