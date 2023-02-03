const express = require ('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
]

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/api/courses', (req, res) => {
    res.send([1,2,3]);
});

app.post('/api/couses', (req, res)=>{
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
});

app.get('/api/courses/:id', (req , res)=>{
    res.send(req.params.id);
});

app.get('/api/posts/:year/:month', (req , res)=>{
    res.send(req.params);
});



const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}!...`));



/* app.post()
app.put()
app.delete() */

// port