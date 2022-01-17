import axios from "axios";

const pathVariable = "student";

export const request = axios.create({
    baseURL:`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${pathVariable}/`
})

export function getProfileToChoose(person){
    const profile = request.get(`person?q=${person}`)
    .then(res => res.data.profile)
    .catch(err => console.log(err))

    return profile;
}