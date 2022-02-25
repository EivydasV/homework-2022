import express from 'express';

const app = express();
const port = 3001;

app.get('/', (_req, res) => {
    res.send('<h1>Congratulations 🎉 You got the WCC 2022 backend server running. Good luck with your task 🙌</h1>');
})

/**
 * Example endpoint
 *  consumes: query parameter "name"
 *  returns: a JSON response
 */
app.get('/greeting', (req, res) => {
    res.json({ 'greeting': `Hello, ${req.query.name || 'World'} 👋`});
})

/**
 * TODO: Add your autocompleter endpoint below this component
 */


app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}.`);
});