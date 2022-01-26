import { useRequestGet } from "../../hooks/useRequests"
import {base_URL} from "../../constants/urls"

export default function ListTripPage(){
    const trips = useRequestGet(`${base_URL}/trips`, [])

    const renderListTrips = trips.map(item =>{
        return(
            <div key={item.id}>
                {item.name}
            </div>
        )
    })

    return(
        <div>
            {renderListTrips}
        </div>
    )
}