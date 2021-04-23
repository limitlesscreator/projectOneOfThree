import s from './Footer.module.sass'
export function Footer(){
    return(
        <footer>
            <div className={s.title}>©{new Date().getFullYear()} Copyright Text</div>
        </footer>
    )
}