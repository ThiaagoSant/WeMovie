import axios from 'axios';
import { Movie } from '../models/Movie';

export class MovieService {
  static async getMovies(): Promise<Movie[]> {
    const response = await axios.get('https://wefit-movies.vercel.app/api/movies');
    return response.data.products;
  }
}
