import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=4e4eee58b292d2f310cacb8e88e7f12e&language=en-US&page=1',
});