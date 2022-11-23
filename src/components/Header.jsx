import styles from './Header.module.css'


export function Header() {
    return (
        <div className={styles.header}>
           <img src="./symbol.svg" alt="" className={styles.imgSymbol}/>
           <h1>Ignite Feed</h1>
        </div>
        
    )
}