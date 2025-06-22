const API_KEY = import.meta.env.VITE_TVDB_API_KEY;
const BASE_URL = 'https://api.thetvdb.com';

 console.log("API KEY:", API_KEY);

let token = null;

async function login() {
  if (token) return token;

  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ apikey: API_KEY }),
  });

  const data = await res.json();
  token = data.data?.token;
  return token;
}

export async function getPopularSeries() {
  const token = await login();

  const res = await fetch(`${BASE_URL}/series/popular`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const data = await res.json();
  return data.data;
 

}

