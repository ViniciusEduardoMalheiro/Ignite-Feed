import { Trash, ThumbsUp } from 'phosphor-react'
import React, { useState } from "react"
import styles from './Coment.module.css'
import { Avatar } from '../components/Avatar'

export function Coment({ content, onDeleteComent }) {


    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComent() {
        onDeleteComent(content)
    }

    function handleLikeComent() {
        setLikeCount((state) => {
            return state +1
        })
    }


    return (
        <div className={styles.container} >
            <Avatar  hasBorder={false} src="https://avatars.githubusercontent.com/u/60896494?v=4"/>

            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vinicius Malheiro</strong>
                            <time title="11 de Dezembro de 2022 às 16:10" dateTime='2022-12-11' >Cerca de 1 hora atrás</time>
                        </div>
                        
                        <button className={styles.delet} title="Deletar comentário" >
                            <Trash size={26} onClick={handleDeleteComent}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComent}> 
                        <ThumbsUp  />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}