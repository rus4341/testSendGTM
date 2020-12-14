//Send a request
//Must send methid as a string, url as a string, data as an object, headers as an array of objects
window.sendRequest = (method,url,data,headers,onResponse) =>{
    let xhr = new XMLHttpRequest();
    
    let json = JSON.stringify(data);

    xhr.open(method,url);

    if (method == 'POST'){
        xhr.setRequestHeader('Content-type', 'application/json');
    }

    for (h in headers){
        header = headers[h];
        xhr.setRequestHeader(header.key, header.value);
    }

    xhr.send(json);

    xhr.onload = () => {
        if (xhr.status != 200) { // analyze HTTP status of the response
          console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } 
        if (onResponse && typeof onResponse === 'function'){
            onResponce({
                status:xhr.status,
                statusText: xhr.statusText
            })
        }
        return;
      };

}

//Base64 Encode data
window.base64Encode = (data) => {
  let encodedData = window.btoa(data);
  return(encodedData);
}

//JSON Encode data
window.jsonEncode = (data) => {
  let encodedData = JSON.stringify(data);
  return(encodedData);
}