import dbConnect from 'server/utils/dbConnect';
import Todo from 'server/models/todo';

dbConnect();

export default async function handler(req, res) {
  const { todoId } = req?.query;
  if (req?.method === 'DELETE') {
    await Todo.findByIdAndDelete(todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ message: 'Deleted successfully!', todos });
  }
}
