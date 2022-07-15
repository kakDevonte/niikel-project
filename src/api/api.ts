import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000/api/',
  //baseURL: 'http://192.168.1.238:5000/api/',
});

export const authAPI = {
  me() {
    return instance.get(`auth/`);
  },
  login(email: string, password: string) {
    return instance.post(`auth/login`, { email, password });
  },
  logout() {
    return instance.delete(`auth/`);
  },
};
