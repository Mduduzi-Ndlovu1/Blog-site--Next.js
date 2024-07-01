// pages/api/auth/_log.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the log request
      console.log(req.body);
      res.status(200).json({ message: 'Log received' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  