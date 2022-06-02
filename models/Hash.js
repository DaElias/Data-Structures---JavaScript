import LinkedList from "./LinkedList";

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return "[" + this.key + " - " + this.value + "]";
  }
}
class Hash {
  #table = []; //private attribute
  put(key, value) {
    const position = this.#loseloseHashCode(key);
    if (this.#elementExist(key, position)) {
      //edit element
      this.remove(key);
    }
    if (this.#table[position] === undefined) {
      this.#table[position] = new LinkedList();
    }
    this.#table[position].append(new ValuePair(key, value));
  }

  get(key) {
    const position = this.#loseloseHashCode(key);
    if (this.#table[position] !== undefined) {
      var current = this.#table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
      //check in case first or last element
      if (current.element.key === key) {
        return current.element.value;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.#loseloseHashCode(key);
    if (this.#table[position] !== undefined) {
      var current = this.#table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          this.#table[position].remove(current.element);
          if (this.#table[position].isEmpty()) {
            this.#table[position] = undefined;
          }
          return true;
        }
        current = current.next;
      }
      //check in case first or last element
      if (current.element.key === key) {
        this.#table[position].remove(current.element);
        if (this.#table[position].isEmpty()) {
          this.#table[position] = undefined;
        }
        return true;
      }
    }
    return false;
  }

  keyToString(key) {
    const position = this.#loseloseHashCode(key);
    if (this.#table[position] === undefined) return undefined;
    return this.#table[position].toString();
  }

  #djb2HashCode(key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
      hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
  }
  #elementExist(key, position) {
    if (this.#table[position] !== undefined) {
      var current = this.#table[position].getHead();
      while (current.next) {
        if (current.element.key === key) {
          return true;
        }
        current = current.next;
      }
      //check in case first or last element
      if (current.element.key === key) {
        return true;
      }
    }
    return false;
  }
  #loseloseHashCode(key = "") {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 37;
  }
}

export default Hash;
