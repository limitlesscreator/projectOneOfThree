import {Movie} from "./Movie";
import s from './Movies.module.sass'

export function Movies(props) {
    const {movies} = props
    return (
        <div className={s.flexMovie}>
            {movies.map(movie => <Movie key={movie.imdbID} {...movie}/>)}
        </div>
    )
}