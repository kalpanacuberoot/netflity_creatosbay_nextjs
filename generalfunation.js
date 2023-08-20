export const isEmpty = (value) => {
  if (value === undefined || value === null || value?.length === 0) {
    return true
  }
  else {
    return false
  }
}
// Assuming you have axios imported or fetch available in your project

// Wrapper function for API calls


export const apiCall =async (url, method, data = null, headers = {}) => {
  try {
    const options = {
      method,
      headers,
    };
    
    if (method.toLowerCase() === 'post') {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options); // Use axios instead if you prefer

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error(`API call error: ${error.message}`);
  }
}

