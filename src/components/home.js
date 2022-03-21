import { useState } from "react";
import Filters from "./filters";
import AllCharactersList from "./allCharactersList";
import StarredCharactersList from "./starredCharactersList";


export default function Home(){
    const [searchQuery, setSearchQuery] = useState('');
    const [showStarred, setShowStarred] = useState(false);
    var listToShow;
    if (showStarred) {
        listToShow = <StarredCharactersList searchQuery={searchQuery}/>
    }else{
        listToShow = <AllCharactersList searchQuery={searchQuery}/>
    }
    return(
        <div className="container">
            <div className="row">
                <Filters searchHandler={setSearchQuery} viewHandler={setShowStarred} showStarred={showStarred}/>
            </div>
            <div className="row mt-3" style={{width: '100%'}}>
                {listToShow}
            </div>
        </div>
    );
}