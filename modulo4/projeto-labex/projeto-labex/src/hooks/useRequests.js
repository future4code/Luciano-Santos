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