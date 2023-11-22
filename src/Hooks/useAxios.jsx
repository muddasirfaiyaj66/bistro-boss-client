// Import necessary dependencies
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

// Create an axios instance with a base URL
export const instance = axios.create({
  baseURL: 'http://localhost:5000',
});

// Custom hook for using axios with interceptors
const useAxios = () => {
  // Get the navigation function from react-router-dom
  const navigate = useNavigate();

  // Get the logOut function from the useAuth hook
  const { logOut } = useAuth();

  // Request interceptor: Add authorization header for every secure API call
  instance.interceptors.request.use(
    function (config) {
      // Retrieve the access token from local storage
      const token = localStorage.getItem('access-token');
      
      // Set the authorization header in the request configuration
      config.headers.authorization = `Bearer ${token}`;
      
      // Return the updated configuration
      return config;
    },
    function (error) {
      // Handle request error
      // Reject the promise with the error
      return Promise.reject(error);
    }
  );

  // Response interceptor: Handle 401 and 403 status codes
  instance.interceptors.response.use(
    function (response) {
      // Return the response if it's successful
      return response;
    },
    async function (error) {
      // Retrieve the HTTP status code from the error response
      const status = error.response.status;

      // Log the status code for debugging purposes
      console.log(status);

      // If the status is 401 or 403, log the user out and navigate to the login page
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      }

      // Reject the promise with the error
      return Promise.reject(error);
    }
  );

  // Return the axios instance with interceptors applied
  return instance;
};

// Export the useAxios hook
export default useAxios;
