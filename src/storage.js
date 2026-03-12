// Simple async wrapper over localStorage to match window.storage.{get,set,delete}
export const storage = {
  async get(key){
    const v = localStorage.getItem(key);
    return v ? { value: v } : null;
  },
  async set(key, value){
    localStorage.setItem(key, value);
  },
  async delete(key){
    localStorage.removeItem(key);
  }
};
