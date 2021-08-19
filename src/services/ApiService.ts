class Api {
  static commonHeaders: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };

  static post = async <T>(url: string, data: any): Promise<T> => {
    const request: RequestInit = {
      method: 'POST',
      body: JSON.stringify(data),
      ...Api.commonHeaders,
    };

    const response = await Api.fetch(url, request);

    return response.json();
  };

  static get = async <T>(url: string): Promise<T> => {
    const request: RequestInit = {
      method: 'GET',
      ...Api.commonHeaders,
    };

    const response = await Api.fetch(url, request);

    return response.json();
  };

  static put = async <T>(url: string, data: any): Promise<T> => {
    const request: RequestInit = {
      method: 'PUT',
      body: JSON.stringify(data),
      ...Api.commonHeaders,
    };

    const response = await Api.fetch(url, request);

    return response.json();
  };

  static delete = async <T>(url: string): Promise<T> => {
    const request: RequestInit = {
      method: 'DELETE',
      ...Api.commonHeaders,
    };

    const response = await Api.fetch(url, request);

    return response.json();
  };

  static fetch = (url: string, request: RequestInit) =>
    fetch((process.env.REACT_APP_API_URL ?? '') + url, request);
}

export default Api;
