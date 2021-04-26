import React, {useState,useEffect} from 'react'
import s from '../Components/Main.module.sass'
import {Movies} from "../Components/Movies";
import {Preloader} from "../Components/Preloader";
import {Search} from "../Components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export function Main() {
    let [movies, setMovies] = useState([])
    let [loading, setLoading] = useState(true)

    useEffect(() => {        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=batman&=`)
        .then(response => response.json())
        .then(data => setMovies(data.Search)) //Search лежит в data API
        .then(data => setLoading(false))
        .catch((err) => {
            console.error(err)
                .then(data => setLoading(false)) //Search лежит в data API

        })},[])

    const searchMovies = (str, flMovie) => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&${flMovie}`)
            .then(response => response.json())
            .then(data => setMovies(data.Search))
            .then(data => setLoading(false))
            .catch((err) => {
                console.error(err)
                    .then(data => setLoading(false))
            })
    }

    return (
        <div className={s.main}>
            <Search searchMovies={searchMovies}/>
            <div>
                {loading ? <Preloader/> : <Movies movies={movies}/>}
            </div>
        </div>
    )

}
