import { useState, useEffect } from 'react';
import axios from 'axios';
import List from 'components/todo/list';
import Add from 'components/todo/add';

export default function Todo() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState({});

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
        // setData(data?.filter((item) => item?.id !== parseInt(id)));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const submit = (e, formData, isEdit) => {
    isEdit ? editTodo(e, formData) : addTodo(e, formData);
  };

  const addTodo = (e, formData) => {
    e.preventDefault();
    axios
      .post('/api/todos', { formData })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const editTodo = (e, formData) => {
    e.preventDefault();
    axios
      .put(`/api/todos/${formData?._id}`, { formData })
      .then(({ data }) => {
        setData(data);
        setLoading(false);
        setIsEdit(false);
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
        <section
          className={
            'flex md:flex-row md:items-start md:justify-center gap-x-8 gap-y-8 flex-col'
          }
        >
          <Add
            submitHandler={submit}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            task={task}
            setTask={setTask}
          />
          <List
            data={data}
            onDelete={deleteTodo}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
            setTask={setTask}
          />
        </section>
      </div>
    </div>
  );
}
