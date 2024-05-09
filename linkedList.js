function LinkedList() {
  let list = null;
  const append = (value) => {
    let newNode = Node(value);
    if (list === null) {
      list = Node(value);
      return;
    }

    for (let node = list; node; node = node.next) {
      if (!node.next) {
        node.next = newNode;
        return;
      }
    }
  };
  const prepend = (value) => {
    list = Node(value, list);
  };
  const size = () => {
    if (!list) return list;
    let nodesCount = 0;
    for (let node = list; node.next; node = node.next) {
      nodesCount++;
    }
    return nodesCount;
  };
  const head = () => {
    return list;
  };
  const tail = () => {
    for (let node = list; node; node = node.next)
      if (!node.next) {
        return node;
      }
  };
  const at = (index) => {
    let listSize = size();

    for (
      let node = list, nodesCount = 0;
      nodesCount <= listSize;
      node = node.next, nodesCount++
    ) {
      if (index === nodesCount) return node;
    }
    return null;
  };
  const pop = () => {
    let listSize = size();
    if (!listSize) throw new Error("List Empty");
    at(listSize - 1).next = null;
  };
  const contains = (value) => {
    for (let node = list; node; node = node.next) {
      if (node.value === value) return true;
    }
    return false;
  };
  const find = (value) => {
    if (!contains(value)) return null;
    let index = 0,
      listSize = size();
    for (let node = list; index < listSize; node = node.next, index++) {
      if (node.value === value) return index;
    }
  };
  const toString = () => {
    let string = "";
    for (let node = list; node; node = node.next) {
      string += `( ${node.value} ) -> `;
    }
    string += "null";
    return string;
  };
  const insertAt = (value, index) => {
    let listSize = size();

    if (index > listSize) return null;
    if (listSize === 0 || index === 0) return prepend(value);

    let previous = at(index - 1);
    let next = at(index);
    previous.next = Node(value, next);
  };
  const removeAt = (index) => {
    let next = at(index + 1);

    if (index === 0) {
      list = next;
      return;
    }
    let previous = at(index - 1);
    previous.next = next;
  };
  return {
    append,
    prepend,
    size,
    head,
    tail,
    pop,
    contains,
    find,
    toString,
    at,
    insertAt,
    removeAt,
  };
}
function Node(value = null, next = null) {
  return {
    value,
    next,
  };
}

list = LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list.toString()); // Output: ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.prepend(5);

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

console.log(list.size()); // Output: 4

console.log(list.head()); // Output: 5

console.log(list.tail()); // Output: 30

console.log(list.at(2)); // Output: 20

list.pop(); // Removes the last node

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 20 ) -> null

console.log(list.contains(20)); // Output: true

console.log(list.find(10)); // Output: 1

list.insertAt(15, 2); // Inserts at index 2

console.log(list.toString()); // Output: ( 5 ) -> ( 10 ) -> ( 15 ) -> ( 20 ) -> null

list.removeAt(1); // Removes at index 1

console.log(list.toString()); // Output: ( 5 ) -> ( 15 ) -> ( 20 ) -> null
