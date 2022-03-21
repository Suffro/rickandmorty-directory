import { useEffect, useState } from "react";
import { setGlobalState, useGlobalState } from "../state";
import { globals } from "../utils/globalVars";
import CharacterCard from "./characterCard";
import Loading from "./loading";
import Pagination from "./pagination";


export default function StarredCharactersList(props) {
    const [characters, setCharacters] = useState();
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [starred] = useGlobalState('starred');
    let starredInt=[];
    for (const id of Object.keys(window.localStorage)) {
        starredInt.push(parseInt(id));
    }
    useEffect(() => {
        fetch(globals.rickmortyApiBaseUrl+'character/'+starredInt)
        .then(res => res.json())
        .then(
            (result) => {
            setCharacters(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            setError(error);
            }
        )
    }, [page,starred])
    var totalPages;
    var characterGrird=[];

    if (error) {
        return <div className="text-center text-success">Error: {error.message}</div>;
    }else if (starredInt.length===0) {
        return <div className="text-center text-success">No results</div>
    }else if(characters){
        characters.length?totalPages = Math.ceil(characters.length / 20):totalPages=1;
        let charactersToShow=[];
        if (characters.length>1) {
           charactersToShow = characters.slice((((page - 1) * 20)), (((page - 1) * 20) + 20));
        }else{
            charactersToShow.push(characters);
        }
        for (const character of charactersToShow) {
            characterGrird.push(
                <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4 d-flex justify-content-center">
                    <CharacterCard character={character}/>
                </div>
            );
        }
        return(
            <div className="container">
                <div className="row mt-5" style={{width: '100%'}}>
                    {characterGrird}
                </div>
                <div className="d-flex justify-content-center my-5">
                    <Pagination currentPage={page} pageHandler={setPage} totalPages={totalPages}/>
                </div>
            </div>
        );
    }else{
        return <div className="d-flex justify-content-center mt-5"><Loading/></div>;
    }
}