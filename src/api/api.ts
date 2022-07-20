import axios from 'axios';
import { UserType } from '../redux/users/types';

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

export const usersAPI = {
  get() {
    return instance.get(`users/`);
  },
  getById(id: string) {
    return instance.get(`users/${id}`);
  },
  create(user: UserType) {
    return instance.post(`users/`, user);
  },
  update(user: UserType) {
    return instance.put(`users/`, user);
  },
  delete(id: string) {
    return instance.delete(`users/${id}`);
  },
};

export const hospitalAPI = {
  search(patient: string) {
    return instance.post('search/', { patient });
  },
  getAll(date: string) {
    return instance.post('getall/', { date });
  },
  get(date: string, department: string) {
    return instance.post(`get/`, { date, department });
  },
  create(data: string) {
    return instance.post(``, { data });
  },
  update(data: string) {
    return instance.put(``, { data });
  },
  delete(data: string) {
    return instance.post(`delete/`, { data });
  },
};
