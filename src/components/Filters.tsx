import './filters.css'
import {useEffect, useState} from "react";
import {PaintingService} from "../services/PaintingService";
import {GenreService} from "../services/GenreService";
import {Genre, Painting} from "../interfaces";
function Filters({filteredPaintings, setFilteredPaintings}){
    const [genreId, setGenreId] = useState('');
    const [searchString, setSearchString] = useState('');
    const [genres, setGenres] = useState<Genre[]>([]);
    const [paintings, setPaintings] = useState<Painting[]>([]);

    useEffect(() => {
        const getAllPaintings = async () => {
            try {
                const response = await PaintingService.getAllPaintings();
                setPaintings(response);
                setFilteredPaintings(response);
            } catch (error) {
                console.error('Error fetching paintings:', error.message);
            }
        };

        const getAllGenres = async () => {
            try {
                const response = await GenreService.getAllGenres();
                setGenres(response);
            } catch (error) {
                console.error('Error fetching paintings:', error.message);
            }
        };
        getAllPaintings();
        getAllGenres();
    }, []);

    useEffect(() => {
        filter();
    },[searchString, genreId]);

    const filter = () => {
        const filtered = paintings.filter((p) => {
            const matchGenre = !genreId || (p.genre && p.genre._id === genreId);
            const matchSearch = (
                p.title.toLowerCase().includes(searchString.toLowerCase()) ||
                p.description.toLowerCase().includes(searchString.toLowerCase())
            );
            return matchGenre && matchSearch;
        });
        setFilteredPaintings(filtered);
    }

    const resetFilters = () => {
        setGenreId('');
        setSearchString('');
    };

    return (
        <div className="filters-div">
                <select className="form-select" aria-label="Default select example" onChange={(event)=>setGenreId(event.target.value)} value={genreId}>
                    <option value="">Стиль</option>
                    {genres?.map((genre) => (
                        <option key={genre?._id} value={genre?._id}>{genre?.name}</option>
                    ))}
                </select>
                <input type="search" id="form1" className="form-control" placeholder="Пошук" aria-label="Search" onChange={(event)=>setSearchString(event.target.value)} value={searchString}/>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={resetFilters}></button>
        </div>
    )
}
export default Filters;
