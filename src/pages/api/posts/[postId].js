export default function handler(req, res) {
  console.log(req);
  return res.status(200).json({
    postId: req.query.postId,
  });
}
