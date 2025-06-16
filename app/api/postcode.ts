import axios from 'axios';

export const searchPostcodeSuggestions = async (query: string) => {
  if (!query) return [];
  try {
    const response = await axios.get(`https://api.postcodes.io/postcodes?q=${query}`);
    return response.data.result || [];
  } catch (error) {
    console.error('Postcode API error:', error);
    return [];
  }
};