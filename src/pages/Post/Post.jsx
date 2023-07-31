import { useParams } from 'react-router-dom'
import styles from './Post.module.css'
import { useFecthDocument } from '../../hooks/useFetchDocument'

const Post = () => {
  const { id } = useParams()
  const { document: post, loading } = useFecthDocument('posts', id)

  return (
    <div className={styles.post_container}>
      {loading && <p>Carregando o post...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p className={styles.sobre}>{post.body}</p>
          <h3>Este poste fala sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag) => (
              <p key={tag} >
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Post