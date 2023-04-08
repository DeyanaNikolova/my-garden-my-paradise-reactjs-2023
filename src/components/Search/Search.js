

import { usePostContext } from '../../contexts/PostContext';
import { useForm } from '../../hooks/useForm';
import { postServiceFactory } from '../../services/postService';

export const Search = () => {
    const { posts } = usePostContext();
    const postService = postServiceFactory();
    
    const onSearchSubmit = async () => {
        const searchValue = values.search;
        
     console.log(searchValue);
        const matches = await postService.getSearch(searchValue);
        console.log(matches);
    };

    const { values, onChangeHandler, onSubmit } = useForm({
        serachValue: ''
    }, onSearchSubmit);



    return (
        <section className="search">
            <form onSubmit={onSubmit}>
                <div className="container">
                    <label htmlFor="search" >&#128269;Search</label>
                    <input
                        type="text"
                        name="search"
                        placeholder="search here..."
                        value={values.searchValue}
                        onChange={onChangeHandler}
                    />
                    <button className="button">Search</button>
                </div>
                <div>
                    {}
                </div>
            </form>
        </section>
    );
};