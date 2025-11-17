import axios from "axios";

const API_Key = "13003b21";
const  BASE_URL = 'https://www.omdbapi.com/';

export const searchMovies = async ( query, type = '' , page=1 ) => 
    {
    const url = `${BASE_URL}?apikey=${API_Key}&s=${query}&type=${type}&page=${page}`;
    return axios.get(url);

}

export const getMovieDetails = async (id) =>
{
    const url = `${BASE_URL}?apikey=${API_Key}&i=${id}`;
    return axios.get(url);
};