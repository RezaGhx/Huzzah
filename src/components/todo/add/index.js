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
