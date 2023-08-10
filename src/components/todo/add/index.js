import { useState } from 'react';

const Add = ({ submitHandler }) => {
  const [value, setValue] = useState('');

  return (
    <form className={'w-full max-w-screen-md bg-gray-100 p-2 md:p-4 rounded-xl'} onSubmit={(e) => submitHandler(e, value)}>
        <input type={'text'} value={value} onChange={(e) => setValue(e.target.value)} />
        <button type={'submit'}>add new course</button>
    </form>
  );
};

export default Add;
