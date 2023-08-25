import { useRouter } from "next/router"



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

export const url = 'https://backend.creatorsbay.app/api'
export const apiCall =async (url, method, data = null, headers = {}) => {
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

    const response = await fetch(url, options); // Use axios instead if you prefer

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
   
    return responseData;
  } catch (error) {

    if (error.message) {
      alert('go to login page')

    } 
    throw new Error(`API call error: ${error.message}`);
    
  }
}

export const getApiCall = async (url, method,  headers = {}) => {

  const router = useRouter();

  try {

    const options = {
      method,
      // headers,
      headers: {
        ...headers, // Keep any additional headers you may have passed
        'Accept': 'application/json', // Add the Accept header
      },
    };

    if (method.toLowerCase() === 'get') {
      options.headers['Content-Type'] = 'application/json';
    }

    const response = await fetch(url,options);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const responseData = await response.json();
   
    return responseData;
     
  } catch (error) {
    console.error('Error:', error);
        if (error.message) {
      alert('go to login page')


    }
  }
};

