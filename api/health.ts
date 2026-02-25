export default (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://api.ejtechnologies.com.ng');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  if (req.method !== 'GET') {
    res.setHeader('Content-Type', 'text/plain');
    return res.status(405).end('Method not allowed');
  }
  res.setHeader('Content-Type', 'text/html');
  res.status(200).end('<h2>✅ Server is running</h2>');
};
