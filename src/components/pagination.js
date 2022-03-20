import { useState } from "react";


export default function Pagination(props){
    const [pagination, setPagination] = useState([1,2,3,4]);
    const paginationLength = 4;
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
                <div className={`page-link bg-dark pointer ${pagination[0]<=1?'text-secondary border-secondary':'text-success border-success'}`} aria-label="Previous" onClick={()=>{navigatePagination(false)}}>
                    <span aria-hidden="true">&laquo;</span>
                </div>
            </li>
            {paginationElements}
            <li className="page-item">
                <div className={`page-link bg-dark pointer ${paginationLast>=props.totalPages?'text-secondary border-secondary':'text-success border-success'}`} aria-label="Next" onClick={()=>{navigatePagination(true)}}>
                    <span aria-hidden="true">&raquo;</span>
                </div>
            </li>
        </ul>
    </nav>
    );
}