import { useParams } from "react-router-dom"

export const MovieDetails = ()=> {
    const {id} = useParams()
    if(id === undefined) return
    const movieId = parseInt(id)
    console.log(movieId)
    return(
        <div>movie id:{movieId}</div>
    )
}