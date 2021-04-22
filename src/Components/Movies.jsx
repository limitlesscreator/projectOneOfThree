import {Movie} from "./Movie";

export function Movies(props) {
    const {movies} = props
    return (
        <div>
            {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
        </div>
    )
}