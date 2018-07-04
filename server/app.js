import express from 'express';

const app = express();
const port = 3000 || process.env.port;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'You reached my homepage successfully.'
  });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
})

export default app; // For testing purposes