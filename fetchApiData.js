import { useRouter } from "next/router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export const fetchApiData = async (url, method, data = null, headers = {}, loaderElement, token = null) => {

    const apiUrl = process.env.API_URL + url; // Use the environment variable

    try {
        const requestOptions = {
            method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${token}` } : {}), // Include the token if provided
                ...headers,
            },
        };

        if (data !== null) {
            requestOptions.body = JSON.stringify(data);
        }

        const response = await fetch(apiUrl, requestOptions);

        if (response.status === 401) {
            toast.error("Session Expired: Please login again to continue.", {
                position: 'top-center',
                autoClose: 5000,
            });
            router.push('/login');
        } else if (response.status === 429) {
            toast.error("Too many requests: Please wait for a few minutes to try and login again.", {
                position: 'top-center',
                autoClose: 5000,
            });
            router.push('/login');
            // showToastMessage("Too many requests: Please wait for a few minutes to try and login again.");
        } else if (response.status === 500) {
            toast.error("Server Error: Please wait while we fix this problem for you.", {
                position: 'top-center',
                autoClose: 5000,
            });
            router.push('/login');
        } else if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

