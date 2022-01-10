// imports
const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = process.env.REACT_APP_TOKEN;
export const getProperties = () => {
  const response = fetch(`${BASE_URL}/properties`, {
    method: 'POST',
    body: JSON.stringify({ token }),
  });
  return response;
};

export const getProperty = (id) => {
  const response = fetch(`${BASE_URL}/properties/${id}/leases`, {
    method: 'POST',
    body: JSON.stringify({ token }),
  });
  return response;
};
