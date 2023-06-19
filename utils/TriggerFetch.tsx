import { request } from "../interfaces/request";


export default async function HttpGet(data:request) {
    return new Promise(async (resolve) =>{
      console.log(data);
      
        const resp = await fetch("/api/handler", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((responseJson) => {
              resolve(responseJson);
              return responseJson;
            })
            .catch((error) => {
              console.error("Error:", error);
            });
    });
}