// import styles from 'styles/Home.module.css';
// import { CheckIcon, PencilAltIcon, TrachIcon } from '@heroicons/react/outline';
// import useSWR from 'swr';
import { useState, useEffect } from 'react';
import axios from 'axios';

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
      .then(({data}) => {
        console.log(data);
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
          <div
            className={
              'w-full max-w-screen-md bg-gray-100 p-2 md:p-4 rounded-xl'
            }
          >
            {data?.todos?.map((item) => (
              <div
                key={item.id}
                className={
                  'flex items-center justify-between border border-gray-300 mb-4 p-5 md:p-10 rounded-xl hover:bg-gray-200'
                }
              >
                <span className={'text-4xl text-neutral-500'}>
                  Task {item.title}
                </span>
                <div className={'flex gap-x-3 items-center'}>
                  <button>
                    {/* <CheckIcon className={"w-6 h-6 stroke-green-400"} /> */}
                    CONFIRM
                  </button>
                  <button>
                    {/* <PencilAltIcon className={"w-6 h-6 stroke-red-400"} /> */}
                    EDIT
                  </button>
                  <button onClick={() => deleteTodo(item.id)}>
                    {/* <TrachIcon className={"w-6 h-6 stroke-blue-400"} /> */}
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
