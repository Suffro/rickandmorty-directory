

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
                <div className="col-8 p-0">
                    <div className="input-group p-0 border border-1 border-success rounded-3">
                        <span className="input-group-text bg-transparent border-0"><i className="bi bi-search text-success"></i></span>
                        <input id="searchbar" type="text" className="form-control bg-transparent border-0 text-white" aria-label="Search bar" onChange={()=>{changeQuery()}}/>
                    </div>
                </div>
                <div className="col p-0 d-flex justify-content-between">
                    <div>
                        <div className="btn btn-outline-success ms-3" onClick={()=>{document.getElementById('searchbar').value=''; changeQuery()}}>Clear</div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <p className="text-success mt-2">View: </p>
                        <div className="btn-group ms-4" role="group" aria-label="View switch">
                            <button type="button" className={`btn ${props.showStarred?'btn-outline-success':'btn-success'}`} onClick={()=>{toggleView(false)}}>All</button>
                            <button type="button" className={`btn ${props.showStarred?'btn-success':'btn-outline-success'}`} onClick={()=>{toggleView(true)}}>Starred</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}