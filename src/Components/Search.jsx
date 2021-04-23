import React from 'react';
import s from './Search.module.sass'

export class Search extends React.Component{
    state = {
        search: '',
    }
    render() {
        return(
            <>
                <div>
                    <input type="search"
                           placeholder={'search'}
                           className={s.search}
                           value={this.state.search}
                           onChange={ (e) => this.setState({search : e.target.value})}
                    />
                </div>
            </>
        )
    }
}