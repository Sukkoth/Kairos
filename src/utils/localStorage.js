class LocalStorage {
  static set(storageName, item) {
    localStorage.setItem(storageName, JSON.stringify(item));
  }

  static get(storageName) {
    return JSON.parse(localStorage.getItem(storageName));
  }

  static remove(storageName) {
    localStorage.removeItem(storageName);
  }
}

export default LocalStorage;
