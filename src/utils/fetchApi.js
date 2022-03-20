
export function useGET(baseUrl,endopoint,args){
    var res;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    fetch(baseUrl+endopoint+args, requestOptions)
    .then(response => response.text())
    .then(result => res=result)
    .catch(error => console.log('error', error));

    return res;
}