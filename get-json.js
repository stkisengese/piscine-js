async function getJSON(path, params = {}) {
  let url;
  try {
    url = new URL(path);
  } catch (error) {
    // if invalid assume it's a relative path
    url = new URL(path, "http://example.com");
  }

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  // For relative URLs, we need to return only the pathname and search
  const urlToFetch =
    url.protocol === "http:" && url.host === "example.com"
      ? url.pathname + url.search
      : url.toString();

  try {
    const response = await fetch(urlToFetch);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // Parse the JSON response
    const jsonData = await response.json();

    // Check for error in the parsed data
    if (jsonData.error) {
      throw new Error(jsonData.error);
    }

    // Return the data if present
    if (jsonData.data !== undefined) {
      return jsonData.data;
    }

    // If neither error nor data is present, return the whole object
    return jsonData;
  } catch (error) {
    throw error;
  }
}

// console.log(getJSON('/test', { query: 'hello world', b: 5 })
// .then(data => console.log('Received data:', data))
// .catch(error => console.error('Error:', error.message)));
