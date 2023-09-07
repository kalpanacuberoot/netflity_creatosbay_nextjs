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

// export const url = 'https://backend.creatorsbay.app/api'
// api.js (Utility file)

export const url = 'https://backend.creatorsbay.app/api'; // Replace with your API endpoint

// Wrapper function for making GET requests
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



