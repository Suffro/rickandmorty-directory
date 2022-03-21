import CharacterDeatails from "./characterDetails";


export default function CharacterModal(){
    return(
        <div className="modal fade bg-black-75" id="characterModal" tabindex="-1" aria-labelledby="characterModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark text-white border-2 border-success">
                    <div className="modal-header bg-success border-success">
                        <h5 className="modal-title fw-bold" id="characterModalLabel">Character details</h5>
                        <span className="pointer" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg text-white"></i></span>
                    </div>
                    <div className="modal-body">
                        <CharacterDeatails/>
                    </div>
                </div>
            </div>
        </div>  
    );
}