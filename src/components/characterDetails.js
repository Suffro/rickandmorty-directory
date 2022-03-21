import { useEffect, useState } from "react";
import { useGlobalState } from "../state";
import EpisodeDetails from "./episodeDetails";
import Starrer from "./toggleStarred";

export default function CharacterDeatails() {
    const [selectedCharacter] = useGlobalState('selectedCharacter');
    const [selectedEpisode, setSelectedEpisode] = useState();
    useEffect(() => {setSelectedEpisode()}, [selectedCharacter]);
    const unselectEpisode = () => {
        setSelectedEpisode();
    }
    var episodes=[];
    if (selectedCharacter.episode) {
        episodes = selectedCharacter.episode.map((ep) =>
            <div key={ep} className="col p-0 mx-1 mb-3"><button onClick={()=>{setSelectedEpisode(ep)}} className="btn btn-success text-center" style={{width:'100%'}}>{ep.split("/").pop()}</button></div>
        );       
        return(
            <div className="card text-white bg-dark border-0">
                <div className="row g-0">
                    <div className="col-md-4 pt-3">
                        <img src={selectedCharacter.image} className="card-img-top border rounded-3 border-3 border-success" alt={selectedCharacter.name}/>   
                    </div>
                    <div className="col-md-8"> 
                        <div className="card-body">
                            <h4 className="card-title text-success fw-bolder d-flex justify-content-start">{selectedCharacter.name} 
                                <span className="d-flex justify-content-center ms-2">
                                    <Starrer id={selectedCharacter.id}/>
                                </span>
                            </h4>
                            <div className="card-text"><strong>Species:</strong> {selectedCharacter.species}</div>
                            <div className="card-text"><strong>Status:</strong> {selectedCharacter.status}</div>
                            <div className="card-text"><strong>Gender:</strong> {selectedCharacter.gender}</div>
                            <div className="card-text"><strong>Origin:</strong> {selectedCharacter.origin.name}</div>
                            <div className={`card-text ${selectedCharacter.status==='Alive'?'':'hide'}`}><strong>Location:</strong> {selectedCharacter.location.name}</div>
                            <div className="card-text"><strong>Episodes:</strong> {selectedCharacter.episode.length}</div>
                        </div>
                    </div>
                    <div className="pt-3 border-top border-1 border-success">
                        <h6 className="text-center fw-bold mb-4">Episode{selectedEpisode?' details':'s list'}:</h6>
                        <div className="row hide-scrollbar" style={{maxHeight:'250px',overflowY:'auto'}}>
                            {selectedEpisode?<EpisodeDetails episode={selectedEpisode} back={unselectEpisode}/>:episodes}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return <></>;
}