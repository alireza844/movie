import axios from "axios";

export const fetchAPI = async({title, type, year}) => {
    const apiKey = 'cbea9021&s';
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${title}&type=${type}&y=${year}`);
    return response.data.Search;
} 