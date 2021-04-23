import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Main} from "./layout/Main";
import {Preloader} from "./Components/Preloader";
import {Search} from "./Components/Search";

export function App() {
    return (
        <>

            <Header/>
            <Search/>
            <Main/>
            <Footer/>
        </>
    )
}