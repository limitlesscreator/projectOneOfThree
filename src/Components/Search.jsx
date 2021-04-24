import React from 'react';
import s from './Search.module.sass'

export class Search extends React.Component {
    state = {
        search: 'batman',
        filterBtn: 'All',
        filterMovies: ''
    }

    handleKey = (e) => {
        if (e.key === 'Enter' && this.state.search.length) {
            this.setState({filterBtn: 'All'})
            this.props.searchMovies(this.state.search)
        }
    }
    changeFilter = (filterValue) => {
        this.setState({filterBtn: filterValue})
    }

    reFetchButton = (typeMovie) => {
        if (this.state.search.length){
            this.setState({filterMovies: 'typeMovie'})
            this.props.searchMovies(this.state.search,typeMovie)
        }

    }

    render() {
        return (
            <>
                <div>
                    <input type="search"
                           placeholder={'search'}
                           className={s.search}
                           value={this.state.search}
                           onChange={(e) => this.setState({search: e.target.value})}
                           onKeyDown={this.handleKey}
                    />
                    <div className={s.buttons}>
                        <button onClick={() => {this.changeFilter('All');;this.reFetchButton('')}} className={this.state.filterBtn === "All" ? s.activeFilter : s.btnFilter}>All</button>
                        <button onClick={() => {this.changeFilter('Movies');this.reFetchButton('type=movie')}} className={this.state.filterBtn === "Movies" ? s.activeFilter : s.btnFilter}>Movies</button>
                        <button onClick={() => {this.changeFilter('Series');this.reFetchButton('type=series')}} className={this.state.filterBtn === "Series" ? s.activeFilter : s.btnFilter}>Series</button>
                    </div>

                </div>
            </>
        )
    }
}