import './App.css';
import React, {Component} from 'react'


export class App extends Component {

    componentDidMount = () => {
        async function f1() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            return res.json()

        }

        async function f2() {
            const res = await fetch('https://yts.mx/api/v2/list_movies.json')
            return res.json()
        }

        async function f3() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            return res.json()
        }

        async function go() {
            let a = await f1();
            console.log('f1'+{a})
            let b = await f2()
            console.log('f2'+{b})
            let c = await f3()
            console.log('f3'+{c})
        }

        go()


    }

    render() {


        return (
            <div>
                {/*<UncontrolledForm/>*/}
            </div>
        )
    }
}

