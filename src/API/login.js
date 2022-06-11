export const login = (payload) => {
  fetch("http://localhost:8080/lyrics/login", payload);
};
