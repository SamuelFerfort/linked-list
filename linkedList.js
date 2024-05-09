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
    if (!listSize) return "Empty!";
    at(listSize - 1).next = null;
  };
  const contains = (value) => {
    for (let node = list; node.next; node = node.next) {
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
    let listSize = size();
    let string = "";
    for (let i = 0; i <= listSize; i++) {
      string += "( value ) -> ";
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
        list = next
        return
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

list.append(1);
list.append(2);
list.append(4);

console.log(list.removeAt(3));
console.log(list.head());
