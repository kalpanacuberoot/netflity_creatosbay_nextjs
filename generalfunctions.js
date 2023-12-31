

import { useRouter } from 'next/router';


export const isEmpty = (value) => {
  if (value === undefined || value === null || value?.length === 0) {
    return true
  }
  else {
    return false
  }
}

export const url = 'https://backend.creatorsbay.app/api'
export const apiCall = async (url, method, data = null, headers = {}) => {
  try {
    const options = {
      method,
      // headers,
      headers: {
        ...headers, // Keep any additional headers you may have passed
        'Accept': 'application/json', // Add the Accept header
      },
    };

    if (method.toLowerCase() === 'post') {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {

    throw new Error(`API call error: ${error.message}`);

  }
}

export const getApiCall = async (url, method, headers = {}) => {

  const router = useRouter();

  try {

    const options = {
      method,
      headers: {
        ...headers, 
        'Accept': 'application/json', 
      },
    };

    if (method.toLowerCase() === 'get') {
      options.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url, options);
    const responseData = await response.json();
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    }
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

  } catch (error) {
    console.error('Error:', error);
  }
};


