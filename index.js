const express = require('express');


const app = express();

// function rootCall(req, res){
//     res.send('Thank you very much')
// }
// const  rootCall = (req, res) => {
//     res.send('Thank you very much')
// }

app.get('/', (req, res) =>{
    res.send("I know how to how to open node...YAYyyy");
})

app.listen(4200, () => console.log('Listening to port 4200'));