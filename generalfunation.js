import { useRouter } from "next/router"



export const isEmpty = (value) => {
  if (value === undefined || value === null || value?.length === 0) {
    return true
  }
  else {
    return false
  }
}

export const url = 'https://backend.creatorsbay.app/api'; 

export const apiCall = async (url, method, data = null, headers = {}) => {
  try {
    const options = {
      method,
      headers: {
        ...headers, 
        'Accept': 'application/json', 
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

export async function getApiData(endpoint) {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

// Wrapper function for making POST requests
export async function postApiData(endpoint, requestData) {
  try {
    const response = await fetch(`${apiUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error posting data: ${error.message}`);
  }
}



