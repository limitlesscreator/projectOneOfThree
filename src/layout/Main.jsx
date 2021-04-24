import React from 'react'
import s from '../Components/Main.module.sass'
import {Movies} from "../Components/Movies";
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export class Main extends React.Component {

    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=batman&=`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false})) //Search лежит в data API
    }

    searchMovies = (str, flMovie) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&${flMovie}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }


    render() {
        const {movies, loading} = this.state

        return (
            <div className={s.main}>
                <Search searchMovies={this.searchMovies}/>
                <div>
                    {loading ? <Preloader/> : <Movies movies={movies}/>}
                </div>
            </div>
        )
    }
}
