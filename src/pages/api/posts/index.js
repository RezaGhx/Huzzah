export default function handler(req, res) {
  return res.status(200).json({
    posts: [{ title: 'salam' }, { title: 'buy' }],
  });
}
