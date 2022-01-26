import axios from "axios";
import {base_URL} from "../constants/urls";

export const request = axios.create({
    baseURL: base_URL
});

