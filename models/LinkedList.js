class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  #length;
  #head;
  constructor() {
    this.#length = 0;
    this.#head = null;
  }
  getHead() {
    return this.#head;
  }
  // • append(element): This adds a new item to the end of the list.
  append(element) {
    const node = new Node(element);
    var current;
    if (this.#head === null) {
      // * first node on list //{3}
      this.#head = node;
    } else {
      current = this.#head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.#length += 1;
  }
  // • removeAt(position): This removes an item from a specified position in the list.
  removeAt(position = 0) {
    if (position > -1 && position < this.#length) {
      var current = this.#head,
        previous,
        index = 0;
      if (position === 0) {
        this.#head = current.next;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        this.#length--;
        return current.element;
      }
    } else return null;
  }
  // • insert(position, element): This inserts a new item at a specified
  insert(position, element) {
    if (position >= 0 && position <= this.#length) {
      var node = new Node(element),
        current = this.#head,
        previous,
        index = 0;
      if (position === 0) {
        node.next = current;
        this.#head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.#length++;
        return true;
      }
    } else return false;
  }
  // position in the list.
  // • toString(): As the list uses a Node class as an item, we need to overwrite the default toString method inherited from the JavaScript object to output only the element values.
  toString() {
    var current = this.#head,
      string = "";
    while (current) {
      string += current.element + " - ";
      current = current.next;
    }
    return string;
  }
  // • indexOf(element): This returns the index of the element in the list. If the element is not in the list, it returns -1.
  indexOf(element) {
    var current = this.#head,
      index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  // • remove(element): This removes an item from the list.
  remove(element) {
    const index = this.indexOf(element) ;
    return this.removeAt(index);
  }
  // • isEmpty(): This returns true if the linked list does not contain any elements and false if the size of the linked list is bigger than 0.
  isEmpty() {
    return this.#length === 0;
  }
  // • size(): This returns how many elements the linked list contains. It is similar to the #length property of the array.
  size() {
    return this.#length;
  }
}

export default LinkedList;
