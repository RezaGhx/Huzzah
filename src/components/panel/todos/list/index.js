import Link from 'next/link';
import {
  TrashIcon,
  PencilAltIcon,
  CheckIcon,
  ClipboardListIcon,
  XIcon,
} from '@heroicons/react/solid';

const List = ({ data, onDelete, isEdit, setIsEdit, setTask }) => {

  return (
    <div className={'w-full max-w-screen-md bg-gray-100 p-2 md:p-4 rounded-xl'}>
      {data?.map((item) => (
        <div
          key={item._id}
          className={
            'flex items-center justify-between border border-gray-300 mb-4 p-5 md:p-10 rounded-xl hover:bg-gray-200 cursor-pointer'
          }
        >
          <Link component={'a'} href={`todos/${item?._id}`}>
          <span
            className={`text-4xl ${
              item?.isCompleted ? 'text-neutral-400' : 'text-neutral-900'
            }`}
          >
            Task {item.title}
          </span>
          </Link>
          <div className={'flex gap-x-3 items-center'}>
            <button onClick={() => onDelete(item._id)}>
              <TrashIcon className={'w-6 h-6 text-red-400'} />
            </button>
            <button
              onClick={() => {
                setIsEdit(false);
                setIsEdit(true);
                setTask(item);
              }}
              disabled={isEdit}
            >
              <PencilAltIcon className={'w-6 h-6 text-yellow-400'} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
