import { API_ENDPOINTS_URLS } from '../apiendpointurls';
import { serviceRequest } from '../../apihelper';
export const Fan_SigninAPI = async (params) => {
    let url = API_ENDPOINTS_URLS.Signup_fan;
  
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify(params)
    }
  
    const response = await serviceRequest(url, requestOptions);
  
    if (!response) {
      throw new Error('An error occurred: Response is undefined');
    }
  
    if (response.status === 400) {
      const errorResponse = await response.json();
      // Check if response contains specific error messages
      if (errorResponse && errorResponse.username && errorResponse.email) {
        throw new Error(JSON.stringify(errorResponse));
      } else {
        throw new Error('An error occurred: Bad Request');
      }
    } else if (response.status === 201) {
      return 'User successfully added';
    } else {
      throw new Error('An error occurred: Unexpected status code ' + response.status);
    }
  };
  

  export const Talent_SigninAPI = async (params) => {
    let url = API_ENDPOINTS_URLS.Signup_talent;
  
    let requestOptions = {
      method: 'POST',
      body: JSON.stringify(params)
    }
  
    const response = await serviceRequest(url, requestOptions);
  
    if (!response) {
      throw new Error('An error occurred: Response is undefined');
    }
  
    if (response.status === 400) {
      const errorResponse = await response.json();
      // Check if response contains specific error messages
      if (errorResponse && errorResponse.username && errorResponse.email) {
        throw new Error(JSON.stringify(errorResponse));
      } else {
        throw new Error('An error occurred: Bad Request');
      }
    } else if (response.status === 201) {
      return 'User successfully added';
    } else {
      throw new Error('An error occurred: Unexpected status code ' + response.status);
    }
  };