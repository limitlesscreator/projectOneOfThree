import React from 'react'
import s from '../Components/Main.module.sass'
import {Movies} from "../Components/Movies";
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Search";


export class Main extends React.Component{

    state = {
        movies: [],
        filter: 'type=series'
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=d9322c46&s=matrix&=')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search})) //Search лежит в data API
    }

    searchMovies = (str,filterValue) => {
        let filter = 'type=series'
        let search = str
        this.setState({search: search})
        fetch(`http://www.omdbapi.com/?apikey=d9322c46&s=${search}&${this.state.filter}`)
        //     fetch(`http://www.omdbapi.com/?apikey=d9322c46&s=iron man&${filter}`)

            .then(response => response.json())
            .then(data => this.setState({movies: data.Search}))
    }



    render () {
        const {movies} = this.state

        return (
            <div className={s.main}>
                <Search searchMovies={this.searchMovies}/>
                <div>
                    {movies.length ? <Movies movies={movies}  /> : <Preloader/>}
                </div>
            </div>
        )
    }
}
