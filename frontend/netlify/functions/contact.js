const { createServer } = require('http');

// Handler for Netlify Functions
exports.handler = async (event, context) => {
  // Forward contact form requests to your deployed backend
  const backendUrl = process.env.BACKEND_API_URL;
  
  if (event.httpMethod === 'POST' && event.path === '/api/contact/') {
    try {
      const response = await fetch(`${backendUrl}/api/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: event.body,
      });
      
      return {
        statusCode: response.status,
        body: await response.text(),
        headers: {
          'Content-Type': 'application/json',
        },
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send message' }),
      };
    }
  }
  
  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Not found' }),
  };
};
