import { useEffect, useState } from "react";
import { globals } from "../utils/globalVars";


export default function EpisodeDetails(props) {
    const [episode, setEpisode] = useState();
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(props.episode)
            .then(res => res.json())
            .then(
                (result) => {
                    setEpisode(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setError(error);
                }
            )
    }, [props.episode])
    if (episode) {
        return(
            <div className="card text-white bg-dark border-0">
                <div className="card-body">
                    <h4 className="card-title fs-5 text-success fw-bolder">{episode.name}</h4>
                    <div className="card-text"><strong>Episode:</strong> {episode.episode}</div>
                    <div className="card-text"><strong>Air date:</strong> {episode.air_date}</div>
                </div>
                <button className="btn btn-outline-success" onClick={()=>{props.back()}}><i className="bi bi-arrow-left"></i> Back to list</button>
            </div>
        );
    }
    return <></>;
}