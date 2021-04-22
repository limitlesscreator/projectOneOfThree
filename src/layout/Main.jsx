import React from 'react'
import s from '../Components/Movie.module.css'
import {Movies} from "../Components/Movies";

export class Main extends React.Component{

    state = {
        movies: []
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=d9322c46&s=matrix&=')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render () {
        const {movies} = this.state

        return (
            <div>
                <div className={s.title}>
                    {movies.length ? <Movies movies={movies}/> : <h5>Loading...</h5>}

                </div>
            </div>
        )
    }
}