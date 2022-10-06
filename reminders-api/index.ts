import express from 'express';
import remindersRouter from './routers/reminders'
const app = express();

app.use(express.json())

//Calling app and specify the endpoint
app.use('/reminders', remindersRouter);

// Creating Basic Route
app.get ('/', (req, res)=>{
    res.send('Hello World!');
})
app.listen(8000, () => console.log('Server started.'));


