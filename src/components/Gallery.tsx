import {useEffect, useState} from "react";
import {Painting} from "../interfaces";
import './gallery.css'
import PaintingDetails from "./PaintingDetails";
import Filters from "./Filters";

function Gallery() {
    const [filteredPaintings, setFilteredPaintings] = useState<Painting[]>([]);
    const [isPaintingDetailsVisible, setIsPaintingDetailsVisible] = useState(false);
    const [selectedPainting, setSelectedPainting] = useState<Painting>();

    useEffect(() => {
        localStorage.clear();
    }, []);

    return (
        <div className="gallery-page">
            <Filters filteredPaintings={filteredPaintings} setFilteredPaintings={setFilteredPaintings}/>
            <div className="gallery">
            {filteredPaintings.map((painting)=>{
                return (
                    <div className="painting" key={painting._id}>
                        <div className="image-container">
                        <img src={painting.url} style={{width: '100%'}}/>
                        <div className="overlay" onClick={() => {setSelectedPainting(painting); setIsPaintingDetailsVisible(true)}}>
                            <div className="info">
                                <h3>{painting.title}</h3>
                                <p>{painting.artist}, {painting.year}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                )})
            }
            </div>
            <PaintingDetails trigger={isPaintingDetailsVisible} setTrigger={setIsPaintingDetailsVisible} painting={selectedPainting}/>
        </div>
    )
}

export default Gallery
