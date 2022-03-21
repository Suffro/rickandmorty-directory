

export default function Filters(props){
    const toggleView = (toggle) => {
        props.viewHandler(toggle);
    }
    const changeQuery = () => {
        let query = document.getElementById('searchbar').value;
        props.searchHandler(query.toLowerCase());
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group ms-4" role="group" aria-label="View switch">
                            <button type="button" className={`btn ${props.showStarred?'btn-outline-success':'btn-success'}`} onClick={()=>{toggleView(false)}}>All</button>
                            <button type="button" className={`btn ${props.showStarred?'btn-success':'btn-outline-success'}`} onClick={()=>{toggleView(true)}}>Starred</button>
                        </div>
                    </div>
                </div>
                <span className={props.showStarred?'hide':''}>
                    <div className={"mt-3 d-flex jusitfy-content-center"}>
                            <div className="input-group p-0 border border-1 border-success me-3 rounded-3">
                                <span className="input-group-text bg-transparent border-0"><i className="bi bi-search text-success"></i></span>
                                <input id="searchbar" type="text" className="form-control bg-transparent border-0 text-white" aria-label="Search bar" onChange={()=>{changeQuery()}}/>
                            </div>
                            <div>
                                <div className="btn btn-outline-success" onClick={()=>{document.getElementById('searchbar').value=''; changeQuery()}}>Clear</div>
                            </div>
                    </div>   
                </span> 
            </div>
        </div>
    );
}