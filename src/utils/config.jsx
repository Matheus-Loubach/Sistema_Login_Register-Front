export const api = 'http://localhost:8080/Api'

//Configurações http
export const RequestConfig = (method,data,token) => {

    if (method !== "POST") {
        throw new Error(`Unsupported method: ${method}`);
    }

    let headers = {
        "Content-Type": "Application/json"
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const config = {
        method,
        body: JSON.stringify(data),
        headers,
    };

    return config;
};