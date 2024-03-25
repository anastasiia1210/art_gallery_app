import {Genre} from "../interfaces";
import axios from "axios";

const URL = "http://localhost:3000/api/genres"

export class GenreService {

    static async getAllGenres(): Promise<Genre[]> {
        try {
            const response = await axios.get(URL);
            return response.data;
        } catch (error) {
            console.error('Error fetching genres:', error.message);
            return [];
        }
    }
}
