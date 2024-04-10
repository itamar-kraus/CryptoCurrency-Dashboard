const apiKey = "CG-yDnWGRJ82gHZipwJp4oUvnAY";
const apiUrl = "https://api.coingecko.com/api/v3";

// makeApiRequest Function
// This asynchronous function takes an API endpoint as an argument and constructs a complete URL
// to fetch data from the CoinGecko API. It handles HTTP errors and rate limiting by the API.
export const makeApiRequest = async (endpoint) => {
  try {
    const options = { method: "GET" };
    const url = `${apiUrl}/${endpoint}?x_cg_demo_api_key=${apiKey}`;
    const response = await fetch(url, options);

    // Check if the response status is not OK (200-299)
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error(
          "Our service is currently receiving too many requests. Please wait a moment and try again."
        );
      } else {
        throw new Error(`API request failed with status: ${response.status}`);
      }
    }

    return response.json();
  } catch (error) {
    // Log the error to the console and re-throw to allow further handling
    console.error("Error in makeApiRequest:", error);
    throw error;
  }
};
