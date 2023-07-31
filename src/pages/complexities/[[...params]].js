import { useRouter } from 'next/router';

const Complexity = () => {

    const router = useRouter();
    const { params } = router?.query;

    return ( 
        <h1>Complexity Main Page {JSON.stringify(params)}</h1>
     );
}
 
export default Complexity;