async function getJSON(path, params = {}) {
  // Construct the URL with query parameters
  const url = new URL(path);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  try {
    // Fetch the data
    const response = await fetch(url);

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
