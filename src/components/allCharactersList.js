import { useEffect, useState } from "react";
import { useGlobalState } from "../state";
import { globals } from "../utils/globalVars";
import CharacterCard from "./characterCard";
import CharacterModal from "./characterModal";
import Loading from "./loading";
import Pagination from "./pagination";


export default function AllCharactersList(props){
    const [characters, setCharacters] = useState();
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch(globals.rickmortyApiBaseUrl+'character/?page='+page+'&name='+props.searchQuery)
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
    }, [page,props.searchQuery])

    var totalPages;
    var characterGrird=[];
    
    if (error) {
        return <div className="text-success">Error: {error.message}</div>;
    }else if(characters&&characters.error){
        return <div className="text-center text-success">{characters.error}</div>
    }else if(characters&&!characters.error){
        totalPages = characters.info.pages;
        for (const character of characters.results) {
            characterGrird.push(
                <div key={character.id} className="col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4 d-flex justify-content-center">
                    <CharacterCard character={character}/>
                </div>
            );
        }
        return(
            <>
                <div className="container">
                    <div className="row mt-5" style={{width: '100%'}}>
                        {characterGrird}
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <Pagination currentPage={page} pageHandler={setPage} totalPages={totalPages}/>
                    </div>
                </div>
                <CharacterModal/>
            </>
        );
    }else{
        return <div className="d-flex justify-content-center mt-5"><Loading/></div>;
    }
}