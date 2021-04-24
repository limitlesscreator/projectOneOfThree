import {Movie} from "./Movie";
import s from './Movies.module.sass'

export function Movies(props) {
    const {movies} = props

    if (movies){
        return (
            <div className={s.flexMovie}>
                {movies.map(movie => <Movie key={movie.imdbID} {...movie} />)}
            </div>
        )
    }else {
        return (
            <div className={s.nothing}>Nothing found :(</div>
        )
    }
}