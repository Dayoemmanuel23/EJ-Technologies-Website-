export default (req, res) => {
  if (req.method !== 'GET') {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(405).end('Method not allowed');
  }
  res.setHeader('Content-Type', 'text/html');
  res.status(200).end('<h2>✅ Server is running</h2>');
};
