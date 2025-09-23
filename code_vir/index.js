const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // not required in latest express but works
app.use(express.static('public'));


app.use(bodyParser.urlencoded()); // to parse form data

const homeRoute = require('./router/Home');
const coursesRouter = require('./router/courses');
const quizzesRouter = require('./router/quizzes');
const microRouter = require('./router/micro');
const flashcardsRouter = require('./router/flashcards');
const analyzeRouter = require('./router/analyzer');


const progressRoute = require('./router/progress');
const reminderRoute = require('./router/Reminder');


// const CSERouter = require('./router/CSE');

app.use(homeRoute);
app.get("/test", (req, res)=>{
  res.send("Express is working!")
})
app.use(coursesRouter);
app.use(progressRoute);
app.use(reminderRoute);

app.use(quizzesRouter);
app.use(microRouter);
app.use(flashcardsRouter);
app.use(analyzeRouter);
// app.use(CSERouter);

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Server is started on address http://localhost:${PORT}`)
})




// const express = require('express');
// const app = express();

// // Use built-in body parser
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Import routes
// const homeRoute = require('./router/Home');
// const coursesRouter = require('./router/courses');
// // const quizzesRouter = require('./router/quizzes');
// const loginRoute = require('./router/login');
// const adminisRoute = require('./router/administration');
// const CSERouter = require('./router/CSE');

// // Use routes
// // app.use(homeRoute);
// // app.get("/test", (req, res) => {
// //   res.send("Express is working!");
// // });
// app.use(coursesRouter);
// // app.use(quizzesRouter);
// app.use(loginRoute);
// app.use(adminisRoute);
// app.use(CSERouter);

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is started on address http://localhost:${PORT}`);
// });

// module.exports = app;
