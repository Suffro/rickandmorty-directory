import { useEffect, useState } from "react";


export default function Pagination(props){
    const [pagination, setPagination] = useState([]);
    var paginationLength;

    useEffect(() => {
        if (props.totalPages>=4) {
            paginationLength=4;
            setPagination([1,2,3,4]);
        }else{
            let pag=[];
            for (let index = 0; index < props.totalPages; index++) {
                pag.push(index+1);
            }
            paginationLength=props.totalPages;
            setPagination(pag);
        }
    }, [props.totalPages])

    const navigatePagination = (next) => {
        let newPagination = [];
        if(next){
            let n = pagination[pagination.length-1];
            for (const page of pagination) {
                if (n<props.totalPages) {
                    if ((n+paginationLength)>props.totalPages) {
                        newPagination.push(page+(props.totalPages-n)); 
                    }else if(n<props.totalPages){
                        newPagination.push(page+paginationLength);
                    }
                }
            }
            if (newPagination.length>0) {
                setPagination(newPagination);
            }
        }else{
            let n = pagination[0];
            for (const page of pagination) {
                if (n>1) {
                    if ((n-paginationLength)<1) {
                        newPagination.push(page-(n-1)); 
                    }else{
                        newPagination.push(page-paginationLength);
                    } 
                }
            }
            if (newPagination.length>0) {
                setPagination(newPagination);
            }
        }
    }
    const paginationLast = pagination[pagination.length-1];

    const paginationElements = [];
    for (const page of pagination) {
            paginationElements.push(
                <li className='page-item'>
                    <div
                        className={`page-link text-success border-success pointer ${page===props.currentPage?'bg-success text-white':'bg-dark'}`}
                        onClick={()=>{props.pageHandler(page)}}
                    >
                        {page}
                    </div>
                </li>
            );
    }
    return( 
    <nav aria-label="Page navigation">
        <ul className="pagination">
            <li className="page-item">
                <div className={`page-link bg-dark pointer text-success border-success ${pagination[0]<=1?'opacity-50':''}`} aria-label="Previous" onClick={()=>{navigatePagination(false)}}>
                    <span aria-hidden="true">&laquo;</span>
                </div>
            </li>
            {paginationElements}
            <li className="page-item">
                <div className={`page-link bg-dark pointer text-success border-success ${paginationLast>=props.totalPages?'opacity-50':''}`} aria-label="Next" onClick={()=>{navigatePagination(true)}}>
                    <span aria-hidden="true">&raquo;</span>
                </div>
            </li>
        </ul>
    </nav>
    );
}