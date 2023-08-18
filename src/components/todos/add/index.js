import { useState, useEffect } from 'react';

const Add = ({ submitHandler, isEdit, setIsEdit, task, setTask }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    isCompleted: false,
  });

  useEffect(() => {
    if (isEdit) {
      setFormData(task);
      setVisible(true);
    }
  }, [isEdit]);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {!visible ? (
        <div className={'w-full'}>
          <button
            onClick={() => setVisible(true)}
            className={
              'w-full py-2 bg-blue-500 border text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out'
            }
          >
            Wanna add a new course?
          </button>
        </div>
      ) : (
        <form
          className={'w-full max-w-md bg-gray-100 p-2 md:p-4 rounded-xl'}
          onSubmit={(e) => submitHandler(e, formData, isEdit)}
        >
          <div className={'mb-4'}>
            <label
              className={'text-gray-600 mb-1 block'}
              htmlFor={'todo-title'}
            >
              Title
            </label>
            <input
              placeholder={'title...'}
              name={'title'}
              id={'todo-title'}
              type={'text'}
              value={formData?.title}
              className={
                'w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none block transition duration-300 ease-out'
              }
              onChange={onChangeHandler}
            />
          </div>
          <div className={'mb-8'}>
            <label
              className={'text-gray-600 mb-1 block'}
              htmlFor={'todo-description'}
            >
              Description
            </label>
            <textarea
              name={'description'}
              id={'todo-description'}
              value={formData?.description}
              className={
                'w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 focus:border-none block transition duration-300 ease-out'
              }
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div className={'flex justify-between align-middle min-h-[1.5rem]'}>
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="todo-completed"
            >
              the course has been completed
            </label>
            <input
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-blue-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="todo-completed"
              name={'isCompleted'}
              onChange={() =>
                setFormData({
                  ...formData,
                  isCompleted: !formData?.isCompleted,
                })
              }
              value={formData?.isCompleted}
            />
          </div>
          <div className={'flex items-center gap-x-4 mt-10'}>
            <button
              onClick={() => {
                setIsEdit(false);
                setTask({});
                setVisible(false);
                setFormData({});
              }}
              type={'button'}
              className={
                'w-full py-2 text-blue-500 border border-blue-500 rounded-lg transition-all duration-300 ease-in-out'
              }
            >
              Cancel
            </button>
            <button
              type={'submit'}
              className={
                'w-full py-2 bg-blue-500 border text-white rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out'
              }
            >
              Add
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Add;
