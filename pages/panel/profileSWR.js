import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

async function fetcher(url) {
  const { data } = await axios.get(url);
  return data;
}

const ProfileSWR = () => {

  const { data, error } = useSWR(
    'getUserData',
    fetcher('http://localhost:4000/profile')
  );
  if (error) return <h2>loading...</h2>;
  if (!data) return <h2>loading...</h2>;

  return (
    <div>
      <h3>Profile Page</h3>
      <h2>{data?.name}</h2>
    </div>
  );
};

export default ProfileSWR;
