// Bring in the Express app we created
import app from './app';

// Choose the port. If someone sets PORT in the environment, use it; otherwise 3000.
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Start listening on that port. The callback runs once the server is ready.
app.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
