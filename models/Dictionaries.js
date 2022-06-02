// *Next, we need to declare the methods available for a map/dictionary:
class Dictionaries {
  #items = {};
  #length = 0;
  // • #has(key): This returns true if the key exists in the dictionary and false otherwise.
  #has(key) {
    return this.#items[key];
  }
  // • set(key,value): This adds a new item to the dictionary.
  set(key, value) {
    if (!this.#has(key)) this.#length += 1;
    this.#items[key] = value;
  }
  // • remove(key): This removes the value from the dictionary using the key.
  remove(key) {
    if (this.#has(key)) {
      this.#length -= 1;
      delete this.#items[key];
      return true;
    }
    return false;
  }
  // • get(key): This returns a specific value searched by the key.
  get(key) {
    this.#has(key) ? this.#items[key] : undefined;
  }
  // • clear(): This removes all the #items from the dictionary.
  clear() {
    this.#length = 0;
    this.#items = {};
  }
  // • values(): This returns an array of all the values of the dictionary.
  values() {
    const array = [];
    for (const key in this.#items) {
      if (this.#has(key)) array.push(this.#items[key]);
    }
    return array;
  }
  // • keys(): This returns an array of all the keys the dictionary contains.
  keys() {
    const array = [];
    for (const key in this.#items) {
      array.push(key);
    }
    return array;
  }
  // • size(): This returns how many elements the dictionary contains. It is similar to the length property of the array.
  size() {
    return this.#length;
  }
  // • printAll: This method show all elements whit your keys and values.
  // printAll() {
  //   for (const key in this.#items) {
  //     console.log(`#items[${key}] = ${this.#items[key]}`);
  //   }
  // }
}

export default Dictionaries
