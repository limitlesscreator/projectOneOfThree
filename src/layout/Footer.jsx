import s from './Footer.module.css'
export function Footer(){
    return(
        <footer>
            <div className={s.title}>©{new Date().getFullYear()} Copyright Text</div>
        </footer>
    )
}