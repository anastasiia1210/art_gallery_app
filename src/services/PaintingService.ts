import {Painting} from "../interfaces";

const URL = "http://localhost:3000/api/paintings"

export class PaintingService {

    static async getAllPaintings(): Promise<Painting[]> {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
                throw new Error('Failed to fetch paintings');
            }
            const paintings: Painting[] = await response.json();
            return paintings;
        } catch (error) {
            console.error('Error fetching paintings:', error.message);
            return [];
        }
    }
}
