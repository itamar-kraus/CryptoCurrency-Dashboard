const apiKey = "CG-yDnWGRJ82gHZipwJp4oUvnAY";
const apiUrl = "https://api.coingecko.com/api/v3";

// export const makeApiRequest = async (endpoint) => {
//   try {
//     const options = { method: "GET" };
//     const url = `${apiUrl}/${endpoint}?x_cg_demo_api_key=${apiKey}`;
//     const response = await fetch(url, options);

//     if (!response.ok) {
//       throw new Error(`API request failed with status: ${response.status}`);
//     }

//     return response.json();
//   } catch (error) {
//     console.error("Error in makeApiRequest:", error);
//     throw error;
//   }
// };

export const makeApiRequest = async (endpoint) => {
  try {
    const options = { method: "GET" };
    const url = `${apiUrl}/${endpoint}?x_cg_demo_api_key=${apiKey}`;
    const response = await fetch(url, options);

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
    console.error("Error in makeApiRequest:", error);
    throw error;
  }
};
