import { api, RequestConfig } from '../utils/config'
//Metodos login e register

//Register user
export const register = async (data) => {

    const config = RequestConfig("POST", data);

    try {
        const response = await fetch(api + "/register", config);
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error:', error);
    }
};


// Login user
export const login = async (data) => {
    const config = RequestConfig("POST", data);
  
    try {
      const res = await fetch(api + "/login", config);
      const responseData = await res.json();
      return responseData;
    } catch (error) {
      console.error('Error: ', error);
      throw error; 
    }
  };