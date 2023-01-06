 import { Post } from './components/Post'
 import { Header } from './components/Header'
 import { Sidebar} from './components/Sidebar'

 import './global.css'
 import styles from './App.module.css'

const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/ViniciusEduardoMalheiro.png',
        name: 'Vinicius Malheiro',
        role: 'Software Engineer Júnior'
       },
       content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
       ],
       publishedAt: new Date('2022-05-10 13:58:00 ')
     },
  
     {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/VictorhMalheiro.png',
        name: 'Victor Malheiro',
        role: 'Software Engineer Pleno'
       },
       content: [
        { type: 'paragraph', content: 'Fala galeraAAAAAAAAAa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
       ],
       publishedAt: new Date('2022-05-11 15:58:00 ')
     },
    ];
   
   export function App()  {
    return (
      <>
      <Header />
      
      <div className={styles.wrapper} >
          <Sidebar />
          <main>
          {posts.map(post => { 
              return (
                <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
      </>
    )
  }