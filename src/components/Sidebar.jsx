import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return (
    <aside className={styles.sidebar} >
        <img  className={styles.cover} src="https://images.unsplash.com/photo-1607743386760-88ac62b89b8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="" />
        
        <div className={styles.profile} >
            <Avatar src="https://avatars.githubusercontent.com/u/60896494?v=4"/>
            <strong>Vinicius Malheiro<br></br></strong>
            <span>Software Enginer</span>
        </div>

        <footer>
            
            <a href=""><PencilLine />Editar seu perfil</a> 
        </footer>
        
    </aside>

        
    )
}