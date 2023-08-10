// import styles from 'styles/Home.module.css';
// import useSWR from 'swr';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from 'components/todo/list';
import Add from 'components/todo/add';

// const fetcher = async () => {
//   const { data } = await axios.get('/api/todos');
//   return data;
// };

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  // const { data, error } = useSWR('getTodos', fetcher);
  // if (error) return <div>error macro</div>;
  // if (!data) return <div>loading...</div>;

  useEffect(() => {
    axios
      .get('/api/todos')
      .then((response) => {
        setData(response?.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const addTodo = (e, value) => {
    e.preventDefault();
    axios
      .post(`/api/todos/`, { danzare: value })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  if (loading) return <div>loading...</div>;

  return (
    <div className={'bg=gray-50 min-h-screen'}>
      <nav
        className={'w-full bg-white shadow-sm flex justify-center py-4 mb-6'}
      >
        <h1 className={'font-thin text-6xl text-neutral-600 p-10'}>
          TodoList App Using NextJS & TailwindCSS
        </h1>
      </nav>
      <div className={'container p-2 xl:max-w-screen-xl mx-auto'}>
        <section className={'flex items-center justify-center'}>
          <Add submitHandler={addTodo} />
          <List data={data} onDelete={deleteTodo} />
        </section>
      </div>
    </div>
  );
}
