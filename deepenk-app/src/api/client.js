const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3002';

function getToken() {
  return localStorage.getItem('deepenk_token') || '';
}

export async function api(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`;
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };
  const token = getToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(url, { ...options, headers });
  if (!res.ok) {
    const err = new Error(res.statusText || 'Request failed');
    err.status = res.status;
    err.body = await res.json().catch(() => ({}));
    throw err;
  }
  if (res.status === 204) return null;
  return res.json();
}

export const auth = {
  register(email, password, name) {
    return api('/api/auth/register', { method: 'POST', body: JSON.stringify({ email, password, name }) });
  },
  login(email, password) {
    return api('/api/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
  },
};

export const search = {
  start(query, category) {
    return api('/api/search', { method: 'POST', body: JSON.stringify({ query, category }) });
  },
  poll(searchId) {
    return api(`/api/search/${searchId}`);
  },
};

export const history = {
  list(category, limit) {
    const q = new URLSearchParams();
    if (category && category !== 'All') q.set('category', category);
    if (limit) q.set('limit', limit);
    const query = q.toString();
    return api(`/api/history${query ? `?${query}` : ''}`);
  },
};

export const analytics = {
  visit(path) {
    return api('/api/analytics/visit', { method: 'POST', body: JSON.stringify({ path }) });
  },
  overview() {
    return api('/api/analytics/overview');
  },
};
