const express = require('express');
const app = express();

// Use EJS as templating engine
app.set('view engine', 'ejs');

// Use express static middleware to serve static assets
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('home');
});
 
app.get('/about', (req, res) => {
    res.render('about');
});
 
// Existing code...

app.get('/contact', (req, res) => {
    res.render('contact'); 
});

app.get('/services', (req, res) => {
    res.render('services'); 
});

app.get('/projects', (req, res) => {
    res.render('projects'); 
});

// Existing code...

 
app.post('/submit-contact', (req, res) => {
    console.log(req.body); // This will print the submitted form data to the console
    res.redirect('/');
});

// ... (similarly add routes for other pages)

// Start the server
app.listen(8082, () => {
    console.log('Server is running on port 8082');
});
