import { Link } from 'react-router-dom'
import styles from './PostDetails.module.css'


const PostDetails = ({ post }) => {
    return (
        <div className={styles.post_details}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p className={styles.createdby}>{post.createdBy}</p>
            <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className='btn btn-outline'>
                Ler mais
            </Link>
        </div>
    )
}

export default PostDetails