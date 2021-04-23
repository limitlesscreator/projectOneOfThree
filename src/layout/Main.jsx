import React from 'react'
import s from '../Components/Main.module.sass'
import {Movies} from "../Components/Movies";
import {Preloader} from "../Components/Preloader";


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
            <div className={s.main}>
                <div className={s.title}>
                    {movies.length ? <Movies movies={movies}/> : <Preloader/>}

                </div>
            </div>
        )
    }
}
