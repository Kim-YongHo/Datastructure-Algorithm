class LinkedList {
  // constructor(length) {
  //   this.length = length;
  // }
  length = 0; // 위와 동일한 의미
  head = null;

  add(value) {
    if (this.head) {
      console.log("head 값 : ", this.head);
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      console.log("else 값 : ", this.head);
      this.head - new Node(value);
    }
    this.length++;
    return this.length;
  }
  search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return current?.value;
  }
  remove(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      current++;
    }
    return current?.value;
  }
}
class Node {
  next = null;
  // 외부에서 전달 받는 값은 constructor를 사용해야 함
  constructor(value) {
    this.value = value;
  }
}

const ll = new LinkedList();
ll.length;
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.add(5);
ll.add(6);
console.log(ll.add(6));
console.log(console.log("head 값 : ", this.head));
// ll.search(7); // null
// ll.remove(4);
// ll.search(4); // null
console.log(ll.search(1));
