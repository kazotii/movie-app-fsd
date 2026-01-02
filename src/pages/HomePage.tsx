import { useSelector } from "react-redux"
import { useGetMoviesQuery } from "../app/store/movieApi"
import type { RootState } from "../app/store/store"
import type { Movie } from "../shared/types";

export const Homepage = ()=>{
    const filters = useSelector((state: RootState) => state.filters);
    const {data, isLoading, error} = useGetMoviesQuery(filters);
    if(isLoading)return<p>Load bro...</p>
    if(error)return<p>Sorry error!{":("}</p>

    return (
        <div style={{display: "grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"20px", padding:"2px" }}>
            {data?.results?.map((movie:Movie) => (
                <div key={movie.id} style={{border:'1px solid white', padding: '10px'}}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} style={{width:'100%'}}/>
                    <h2>{movie.title}</h2>
                    <p>Release:{movie.release_date}</p>
                </div>
            ))}

        </div>

    )
}