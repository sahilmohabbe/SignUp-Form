// Import your API Gateway URL from your .env file
const API_GATEWAY_URL = process.env.REACT_APP_API_GATEWAY_URL;

// Function to make a GET request to an API
export const serviceRequest = async (path, requestOptions = {}) => {
  const url = path.startsWith('http://') || path.startsWith('https://') ? path : `${API_GATEWAY_URL}${path}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...requestOptions.headers,
      },
      ...requestOptions,
    });

    if (response.ok) {
      return response;
    } else {
      throw new Error('An error occurred: ' + response.statusText);
    }
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};

// Function to make a POST request to an API
export const postCallServiceRequest = async (path, requestOptions = {}) => {
  const url = path.startsWith('http://') || path.startsWith('https://') ? path : `${API_GATEWAY_URL}${path}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...requestOptions.headers,
      },
      body: JSON.stringify(requestOptions.body),
      ...requestOptions,
    });

    if (response.ok) {
      return response;
    } else {
      throw new Error('An error occurred: ' + response.statusText);
    }
  } catch (error) {
    throw new Error('An error occurred: ' + error.message);
  }
};
