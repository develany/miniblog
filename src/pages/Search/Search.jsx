import { useQuery } from '../../hooks/useQuery'
import { useFecthDocuments } from '../../hooks/useFetchDocuments'



const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const {documents: posts} = useFecthDocuments('posts')

    
    return (
        <div>
            <h2>Search</h2>
            <p>aparece troço: {search} </p>
        </div>
    )
}

export default Search