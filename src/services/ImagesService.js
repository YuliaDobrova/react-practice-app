import axios from 'axios';

const PIXABAY_API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

export const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=10&key=${PIXABAY_API_KEY}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
