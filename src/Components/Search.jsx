import React from 'react';
import s from './Search.module.sass'

export class Search extends React.Component {
    state = {
        search: '',
        filter: 'All'
    }

    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovies(this.state.search)
        }
    }
    changeFilter = (filterValue) => {
        this.setState({filter: filterValue})
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
                        <button onClick={() => {this.changeFilter('All')}} className={this.state.filter === "All" ? s.activeFilter : s.btnFilter}>All</button>
                        <button onClick={() => {this.changeFilter('Movies')}} className={this.state.filter === "Movies" ? s.activeFilter : s.btnFilter}>Movies</button>
                        <button onClick={() => {this.changeFilter('Series')}} className={this.state.filter === "Series" ? s.activeFilter : s.btnFilter}>Series</button>
                    </div>

                </div>
            </>
        )
    }
}