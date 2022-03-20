import { useState } from "react";
import { useGET } from "../utils/fetchApi";
import { globals } from "../utils/globalVars";
import Pagination from "./pagination";


export default function CharactersList(){
    const [characters, setCharacters] = useState(useGET(globals.rickmortyApiBaseUrl, 'character/'));
    const [page, setPage] = useState(1);
    const totalPages = 42;//characters.info.pages;

    return(
        <div className="container">
            <div className="d-flex justify-content-center mt-5">
                <Pagination currentPage={page} pageHandler={setPage} totalPages={totalPages}/>
            </div>
        </div>
    );
}