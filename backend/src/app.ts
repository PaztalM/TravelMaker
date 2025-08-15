//Brings Express in
import express from 'express';
//Brings the CORS middleware in
import cors from 'cors';

//Creates an Express application object.
const app = express();

// Tell Express to understand JSON bodies like { "name": "Paz" }
app.use(express.json());

// Allow the browser (frontend) to call this server
app.use(cors());

/** Defines a route.
When the browser hits GET http://localhost:3000/health, 
we send back a JSON object with the current time.
 This is our “is the server up?” check.
 */
app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'backend',
    time: new Date().toISOString(),
  });
});

// Export the app so server.ts can import it and start listening
export default app;
