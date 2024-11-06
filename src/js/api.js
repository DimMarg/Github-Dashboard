import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/users', // Base URL for GitHub API
});

export default api;