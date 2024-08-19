import { createServer } from 'http';

const myServer = createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/data') {
    // Set the response header to indicate JSON content
    res.setHeader('Content-Type', 'application/json');

    // Create a sample JSON object to return
    const data = {
      message: 'Hello from the server!',
      timestamp: Date.now(),
    };

    // Send the JSON response
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

myServer.listen(8000, () => console.log('Server Started on port 8000'));
