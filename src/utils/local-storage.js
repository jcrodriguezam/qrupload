export const saveToLocalStorage = (variable, value, expires) => {
    try {
      const data = { value, expires_at: new Date(expires).getTime() };
      localStorage.setItem(variable.toString(), JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };
  
  export const loadFromLocalStorage = (localStorageKey) => {
    const data = JSON.parse(localStorage.getItem(localStorageKey.toString()));
    if (data && data.expires_at && data.expires_at > new Date().getTime()) {
      return data;
    }
    return null;
  };
  
  export const removeFromLocalStorage = (localStorageKey) => {
    try {
      localStorage.removeItem(localStorageKey);
    } catch (e) {
      console.log(e);
    }
  };
  