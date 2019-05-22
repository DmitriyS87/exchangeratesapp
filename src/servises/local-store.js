/* eslint-disable no-plusplus */
class LocalStore {
  constructor(storeKey, storage) {
    this.storeKey = storeKey;
    this.storage = storage;
  }

  pushItem(key, item) {
    const items = this.getAll();
    this.storage.setItem(this.storeKey, JSON.stringify({ ...items, [key]: item }));
  }

  rebaseItems(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex + 1; i++) {
      const item = this.getItem(i + 1);
      this.setItem(i, item);
    }
    this.removeItem(endIndex);
  }

  setItem(key, item) {
    const items = this.getAll();
    items[key] = item;
    this.storage.setItem(this.storeKey, JSON.stringify(items));
  }

  getItem(key) {
    const items = this.getAll();
    return items[key];
  }

  removeItem(key) {
    const items = this.getAll();
    delete items[key];
    this.storage.setItem(this.storeKey, JSON.stringify(items));
  }

  getAll() {
    const emptyItems = {};
    const items = this.storage.getItem(this.storeKey);

    if (!items) {
      return emptyItems;
    }

    try {
      return JSON.parse(items);
    } catch (e) {
      return emptyItems;
    }
  }
}

export default LocalStore;
