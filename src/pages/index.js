import styles from '../styles/Home.module.css';
import { todos } from '@/constant/todos';
import { CheckIcon, PencilAltIcon, TrachIcon } from '@heroicons/react/outline';
import useSWR from 'swr';

export default function Home() {

  useSWR('getTodos', fetcher);
  // const fether = async () => {
  //   const {data} await axios.getTotal('/api/todos');
  //   return data;  
  // }
  

  return (
    <div className={'bg=gray-50 min-h-screen'}>
      <nav
        className={'w-full bg-white shadow-sm flex justify-center py-4 mb-6'}
      >
        <h1 className={'font-thin text-6xl'}>
          TodoList App Using NextJS & TailwindCSS
        </h1>
      </nav>
      <div className={'container p-2 xl:max-w-screen-xl mx-auto'}>
        <section className={'flex items-center justify-center'}>
          <div
            className={'w-full max-w-screen-md bg-white p-2 md:p-4 rounded-xl'}
          >
            <div
              className={
                'flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl'
              }
            >
              {todos?.map((item) => (
                <h1
                  key={item.id}
                  className={'bg-teal-100 text-blue-900 text-xl'}
                >
                  Course No.{item.id} - {item.title}
                </h1>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
