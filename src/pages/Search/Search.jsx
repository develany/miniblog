import { useQuery } from '../../hooks/useQuery'
import { useFecthDocuments } from '../../hooks/useFetchDocuments'
import PostDetails from '../../components/PostDetails'
import { Link } from 'react-router-dom';
import styles from './Search.module.css'




const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFecthDocuments('posts', search)


    return (
        <div className={styles.search_container}>
            <h2>Resultados para: {search}</h2>
            <div>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>
                            Não foram encontrados posts a partir da sua busca...
                        </p>
                        <Link to="/" className='btn btn-outline'>
                            Voltar
                        </Link>
                    </div>
                )}
                {posts && posts.map((post) => (
                    <>
                        <PostDetails key={post.id} post={post} />
                        <Link to="/" className='btn btn-outline'>
                            Voltar
                        </Link>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Search