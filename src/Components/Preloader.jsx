import s from './Preloader.module.sass'
export function Preloader() {
    return (
        <div className={s.center}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}