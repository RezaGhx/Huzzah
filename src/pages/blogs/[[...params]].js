import { useRouter } from 'next/router';

const Blog = () => {

    const router = useRouter();
    const { params } = router?.query;

    return ( 
        <h1>Blog Main Page {JSON.stringify(params)}</h1>
     );
}
 
export default Blog;