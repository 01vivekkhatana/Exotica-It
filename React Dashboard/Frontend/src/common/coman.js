const api_responsed = (ajax_url, json_data, method, headers) => {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: method,
      headers: headers,
      body: json_data,
      redirect: "follow",
    };

    fetch(ajax_url, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse response as JSON
      })
      .then((result) => {
        resolve(result); // Resolve with JSON data
      })
      .catch((error) => {
        reject(error); // Reject with error
      });
  });
};

export default api_responsed;
