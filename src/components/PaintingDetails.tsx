import "./painting-details.css"
function PaintingDetails(props){
    return (props.trigger) ? (
        <>
            <div className='background'>
                <div className='model-div'>
                        <div className="img-details-div">
                        <img src={props.painting.url}/>
                        </div>
                        <div className="text-details-div">
                            <h3 className="modal-title">{props.painting.title}</h3>
                            <hr style={{ marginTop: 0 }} />
                            <p><b>Стиль:</b> {props.painting.genre?.name}</p>
                            <p><b>Художник:</b> {props.painting.artist}</p>
                            <p><b>Рік створення:</b> {props.painting.year}</p>
                            <p style={{ marginTop: '20px' }}>{props.painting.description}</p>
                        </div>
                            <button type="button" className="btn-close" aria-label="Close" onClick={()=>{props.setTrigger(false)}}></button>
                </div>
            </div>
        </>
    ):"";
}
export default PaintingDetails
