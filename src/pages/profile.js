import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
const [loading, setLoading] = useState(true);
const [data, setData] = useState(null);

useEffect(() => {
    axios.get('http://localhost:4000/profile')
    .then((res) => {
        setLoading(false);
        setData(res?.data);
    })
    .catch((err) => console.log(err));
}, [])

if(loading) return<h2>loading...</h2>

    return ( <div>
        
        <h3>Profile Page</h3>

    </div> );
}
 
export default Profile;