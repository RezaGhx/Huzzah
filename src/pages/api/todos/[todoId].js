import dbConnect from 'server/utils/dbConnect';
import Todo from 'server/models/todo';

dbConnect();

export default async function handler(req, res) {
  const { method, body, query } = req;
  if (method === 'DELETE') {
    await Todo.findByIdAndDelete(query?.todoId);
    const todos = await Todo.find({});
    return res.status(200).json({ message: 'Deleted successfully!', todos });
  } else if (method === 'PUT') {
    await Todo.findByIdAndUpdate(
      query?.todoId,
      { $set: body?.formData }
    );
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
