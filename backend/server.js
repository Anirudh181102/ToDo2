const express=require('express');
const app=express();

const cors=require('cors');

const taskModule=require('./models/task');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello ani');
}); 



app.listen(3000);