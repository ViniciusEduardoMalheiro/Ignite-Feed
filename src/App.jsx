 import { Post } from './Post'
 import { Header } from './components/Header'
 import './global.css'
 import styles from './App.module.css'
 
 export function App(props) {
  return (
    <>
    <Header />
    
    <div className={styles.wrapper} >
        <aside>
          SideBar
        </aside>
        <main>
          <Post content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti a pariatur maxime dolorum quos reiciendis" author="Vinicius Malheiro"/>
          <Post content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti a pariatur maxime dolorum quos reiciendis" author="Diego esburacado"/>
        </main>
    </div>
    </>
  )
}