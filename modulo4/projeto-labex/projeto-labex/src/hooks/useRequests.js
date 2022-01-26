import * as services from "../services/apiRequestAxios";
import { useState, useEffect } from "react";

export const useRequestGet = (url, stageZero) =>{
    const [data, setData] = useState(stageZero)

    useEffect(()=>{
        services.request.get(url)
        .then(res => setData(res.data.trips))
        .catch(err => console.log(err.response.data))
    },[url])

    return data;
}

// export const useRequestPost = (url, body, headers, stageZero) =>{
//     const [data, setData] = useState(stageZero)

//     useEffect(()=>{
//         services.request.post(url, body, headers)
//         .then(res => setData(res.data))
//         .catch(err => console.log(err.response.data))
//     },[url])
// }