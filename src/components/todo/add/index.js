import { useState } from 'react';

const Add = ({ submitHandler }) => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});

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
          onSubmit={(e) => submitHandler(e, formData)}
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
          <div
            className={
              'mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]'
            }
          >
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              id="inlineCheckbox1"
              value="option1"
            />
            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="inlineCheckbox1"
            >
              Yes
            </label>
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              id="inlineCheckbox2"
              value="option1"
            />
            <label
              class="inline-block pl-[0.15rem] hover:cursor-pointer"
              for="inlineCheckbox2"
            >
              No
            </label>
          </div>
          <div className={'flex items-center gap-x-4'}>
            <button
              onClick={() => {
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
