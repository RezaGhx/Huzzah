import dbConnect from 'server/utils/dbConnect';
import Todo from 'server/models/todo';

dbConnect();

export default async function handler(req, res) {
  const { method, body } = req;
  if (method === 'POST') {
    await Todo.create(body?.formData);
    const todos = await Todo.find({});
  } else if (method === 'GET') {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
