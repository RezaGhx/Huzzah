import dbConnect from 'server/utils/dbConnect';
import Todo from 'server/models/todo';

dbConnect();

export default async function handler(req, res) {
  console.log(req.query);
  const { todoId } = req?.query;
  if (req?.method === 'DELETE') {
    await Todo.findByIdAndDelete(todoId);
    // const index = Todo.findIndex((todo) => todo.id === parseInt(todoId));
    // todos.splice(index, 1);
    const todos = await Todo.find({});
    return res.status(200).json({ message: 'Deleted successfully!', todos });
  }
}
