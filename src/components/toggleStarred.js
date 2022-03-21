
import {setGlobalState, useGlobalState} from '../state.js'

export default function Starrer(props){
    const [starred] = useGlobalState('starred');
    const id = props.id;
    const toggleStarCharacter = () => {
        if (window.localStorage[id]) {
            delete window.localStorage[id];
        }else{
            window.localStorage[id] = true;
        }
        setGlobalState('starred', Object.keys(window.localStorage));
    }

    if (window.localStorage[id]) { return <i className="bi bi-star-fill text-warning pointer fs-5" onClick={()=>{toggleStarCharacter()}}></i> }
    return <i className="bi bi-star text-warning pointer fs-5" onClick={()=>{toggleStarCharacter()}}></i>;
}