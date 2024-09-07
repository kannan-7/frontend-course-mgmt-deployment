const B = import.meta.env.VITE_BASE_API_URL;

export function postApi(url, data) {
  const API_URL = B + url;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function getApiWithToken(url, token) {
  const API_URL = B + url;
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function postApiWithToken(url, data, token) {
  const API_URL = B + url;
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export function deleteApiWithToken(url, token) {
  const API_URL = B + url;
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(API_URL, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
