

export default function CharacterCard(props){
    const ch = props.character;
    return(
        <div className="card text-white border-4 highlight" style={{width: '18rem'}}>
            <img src={ch.image} className="card-img-top" alt={ch.name}/>
            <div className="card-body">
                <h6 className="card-title text-center fw-bolder">{ch.name}</h6>
                <p className="card-text text-center">{ch.species}</p>
            </div>
        </div>
    );
}