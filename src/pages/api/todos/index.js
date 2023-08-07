import { todos } from 'constant/todos';

export default function handler(req, res) {
  return res.status(200).json({
    todos,
  });
}
