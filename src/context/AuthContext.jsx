import React, { createContext, useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('pm_user')) || null;
    } catch (e) {
      return null;
    }
  });
  const [token, setToken] = useState(() => localStorage.getItem('pm_token') || null);

  useEffect(() => {
    if (token) localStorage.setItem('pm_token', token); else localStorage.removeItem('pm_token');
    if (user) localStorage.setItem('pm_user', JSON.stringify(user)); else localStorage.removeItem('pm_user');
  }, [token, user]);

  async function signin(email, password) {
    const res = await fetch(`${API_BASE}/api/auth/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error(`Signin failed: ${res.status}`);
    const data = await res.json();
    setToken(data.token);
    setUser(data.user || null);
    return data;
  }

  async function signup({ name, email, password }) {
    const res = await fetch(`${API_BASE}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!res.ok) throw new Error(`Signup failed: ${res.status}`);
    const user = await res.json();
    return user;
  }

  async function signout() {
    try {
      if (token) {
        await fetch(`${API_BASE}/api/auth/signout`, {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + token },
        });
      }
    } catch (e) {
      // ignore
    }
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, signin, signup, signout, isAuthenticated: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
