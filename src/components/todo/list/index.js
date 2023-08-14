import { useRouter } from 'next/router';
import { TrashIcon, PencilAltIcon, CheckIcon, ClipboardListIcon } from '@heroicons/react/solid';

const List = ({ data, onDelete }) => {
  const router = useRouter();
  const detailHandler = (title) => {
    router.push(`/panel/todo/${title}`);
  };

  return (
    <div className={'w-full max-w-screen-md bg-gray-100 p-2 md:p-4 rounded-xl'}>
      {data?.todos?.map((item) => (
        <div
          key={item._id}
          className={
            'flex items-center justify-between border border-gray-300 mb-4 p-5 md:p-10 rounded-xl hover:bg-gray-200 cursor-pointer'
          }
        >
          <span className={'text-4xl text-neutral-500'}>Task {item.title}</span>
          <div className={'flex gap-x-3 items-center'}>
            <button>
              <CheckIcon className={'w-6 h-6 stroke-green-400'} />
            </button>
            <button onClick={() => onDelete(item._id)}>
              <TrashIcon className={'w-6 h-6 stroke-red-400'} />
            </button>
            <button>
              <PencilAltIcon className={'w-6 h-6 stroke-blue-400'} />
            </button>
            <button onClick={() => detailHandler(item.title)}>
              <ClipboardListIcon className={'w-6 h-6 stroke-yellow-400'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
