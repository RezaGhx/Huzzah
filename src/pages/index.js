import styles from '../styles/Home.module.css';
// import { todos } from '@/constant/todos';
import { CheckIcon, PencilAltIcon, TrachIcon } from '@heroicons/react/outline';
import useSWR from 'swr';

const fetcher = async () => {
  const { data } = await axios.get('http://localhost:3000/api/todos');
  return data;
};

export default function Home() {
  const { data, error } = useSWR('getTodos', fetcher);
  if (error) return <div>error macro</div>;
  if (!data) return <div>loading...</div>;

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
            {data?.todos?.map((item) => (
              <div
                key={item.id}
                className={
                  'flex items-center justify-between border border-gray-100 mb-4 p-3 md:p-4 rounded-xl'
                }
              >
                <span>Task {item.title}</span>
                <div className="flex gap-x-3 items-center">
                  <button>
                    <CheckIcon className="w-6 h-6 stroke-green-400" />
                  </button>
                  <button>
                    <PencilAltIcon className="w-6 h-6 stroke-red-400" />
                  </button>
                  <button>
                    <TrachIcon className="w-6 h-6 stroke-blue-400" />
                  </button>
                </div>
              </div>
              // <h1 key={item.id} className={'bg-teal-100 text-blue-900 text-xl'}>
              //   Course No.{item.id} - {item.title}
              // </h1>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
