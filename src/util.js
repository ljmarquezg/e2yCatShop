import { ajax } from "rxjs/observable/dom/ajax";

const API_URL = process.env.REACT_APP_API_URL;

export const api = {
  get: endpoint => {
    const timestamp = new Date().getTime();
    return ajax.getJSON(`${API_URL}${endpoint}?t=${timestamp}`);
  },
  put: (endpoint, payload = {}) => {
    return ajax.put(`${API_URL}${endpoint}?t=${timestamp}`, payload);
  }
};
