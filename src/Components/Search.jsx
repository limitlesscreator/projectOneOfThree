import React ,{useState} from 'react';
import s from './Search.module.sass'

export function Search(props){
    let [search,setSearch] = useState('batman')
    let [filterBtn,setFilterBtn] = useState("All")
    let [filterMovies,setFilterMovies] = useState("")

    const handleKey = (e) => {
        if (e.key === 'Enter' && search.length) {
            setFilterBtn("All")
            props.searchMovies(search)
        }
    }
    const changeFilter = (filterValue) => {
        setFilterBtn(filterValue)
    }

    const reFetchButton = (typeMovie) => {
        if (search.length){
            props.searchMovies(search,typeMovie)
        }

    }
        return (
            <>
                <div>
                    <input type="search"
                           placeholder={'search'}
                           className={s.search}
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                           onKeyDown={handleKey}
                    />
                    <div className={s.buttons}>
                        <button onClick={() => {changeFilter('All');reFetchButton('')}} className={filterBtn === "All" ? s.activeFilter : s.btnFilter}>All</button>
                        <button onClick={() => {changeFilter('Movies');reFetchButton('type=movie')}} className={filterBtn === "Movies" ? s.activeFilter : s.btnFilter}>Movies</button>
                        <button onClick={() => {changeFilter('Series');reFetchButton('type=series')}} className={filterBtn === "Series" ? s.activeFilter : s.btnFilter}>Series</button>
                    </div>

                </div>
            </>
        )
}