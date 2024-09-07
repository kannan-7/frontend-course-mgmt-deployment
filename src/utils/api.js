const BASE_API_URL = import.meta.env.BASE_API_URL;

export function postApi(url, data) {
  const API_URL = BASE_API_URL + url;
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function getApiWithToken(url, token) {
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function postApiWithToken(url, data, token) {
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
}

export function deleteApiWithToken(url, token) {
  if (!token) {
    return Promise.reject(new Error("No token provided"));
  }
  return fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
