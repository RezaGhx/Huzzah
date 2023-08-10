import { todos } from 'constant/todos';

export default function handler(req, res) {
  if (req?.method === 'POST') {
    const newTodo = {
      id: Date.now(),
      title: req?.body?.value,
    };
    todos?.push(newTodo);
    return res.status(201).json({ message: 'با موفقیت اضافه شد.', todos });
  } else if (req?.method === 'GET') {
    return res.status(200).json({ todos });
  }
}
