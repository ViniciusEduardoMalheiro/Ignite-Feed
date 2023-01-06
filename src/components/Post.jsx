import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'
import { Coment } from './Coment'
import { Avatar } from './Avatar'
import { useState } from 'react'
 

export function Post ({author, publishedAt, content}) {

    const [coments, setComents] = useState([
       'Post muito bacana, hein?!'
       ])

    const [newComentText, setNewComentText] = useState('') 

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })


    const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComent() {
        event.preventDefault()


        setComents([...coments, newComentText ]);
        
        setNewComentText('')

        
    }

    function handleNewComentChange() {
        event.target.setCustomValidity('')
        setNewComentText(event.target.value)
    }


    function deleteComent(comentToDelete) {
        const comentsWithoutDeletedOne = coments.filter(coment => {
            return coment !== comentToDelete;
        })


        setComents(comentsWithoutDeletedOne)
    }

    function handleNewComentInvalid() {
         event.target.setCustomValidity('Este campo é obrigatório!')
    }

    const isNewComentEmpty   = newComentText.length === 0

    return (
        <article className={styles.post} >
            <header>
                <div className={styles.author} >
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content} > 
                {content.map(line => {
                    
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="">{line.content}</a></p>;
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComent} className={styles.feedback} >
                    <strong >Deixe seu feedback</strong>

                    <textarea 
                    type="text" placeholder='Conte para a gente o seu feedback'
                    name='coment'
                    value={newComentText}
                    onChange={handleNewComentChange}
                    onInvalid={handleNewComentInvalid}
                    required
                    />

                    <footer>
                      <button type='submit' disabled={isNewComentEmpty} >Publicar</button>  
                    </footer>
            </form>
            <div  className={styles.comentList} >
            {coments.map(coment => {
                return (
                    <Coment
                    onDeleteComent={deleteComent}
                    key={coment}
                    content={coment}
                    />
                    
                )
            })}
            </div>
        </article>
    )
}