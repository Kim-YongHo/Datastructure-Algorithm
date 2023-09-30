class LinkedList {
  length = 0;
  head = null;

  add(value) {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value);
    } else {
      this.head = new Node(value);
    }
    this.length++;
    return this.length;
  }
  search(index) {
    return this.#search(index)[1]?.value; // ?. : 옵셔널 체이닝 값이 없은면 undefined 반환
  }

  #search(index) {
    let count = 0;
    let prev;
    let current = this.head;
    while (count < index) {
      prev = current;
      current = current?.next;
      count++;
    }
    return [prev, current];
  }

  remove(index) {
    const [prev, current] = this.#search(index);
    if (prev && current) {
      prev.next = current.next;
      this.length--;
      return this.length;
    } else if (current) {
      // index가 0일때
      this.head = current.next
      this.length--
      return this.length
    }
  }
}

class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

let test = new Node(892);
console.log(test);
console.log(test.next);
console.log(test.value);

const ll = new LinkedList();
ll.length;
ll.add(1); //1
ll.add(2); //2
ll.add(3); //3
ll.add(4); //4
ll.add(5); //5
ll.add(6); //6
console.log(ll.search(6)) // undefined
ll.remove(4);
console.log(ll.search(4)) // 6
ll.remove(4);
console.log(ll.search(4)) // undefined
console.log(ll.search(4)) // undefined
// console.log(ll.search(3))
// console.log(ll.search(5))
// console.log(ll.search(7))

// ll.search(4);
// ll.search(7); // null
// ll.remove(4);
// ll.search(4); //null
console.log('end')
