const express = require('express');

const expressServer = express();

const port = 5000;

expressServer.get('/api/customers',(req,res)=>{
    const customers = [
        {id: 1, firstName: 'John', lastName:'Doe'},
        {id: 2, firstName: 'Joel', lastName:'Egghead'},
        {id: 3, firstName: 'Brad', lastName:'Traversy'},
    ];
    res.json(customers);
})
expressServer.get('/',(req,res)=>res.send('boo'));

expressServer.listen(port, ()=>console.log(`Server started at port ${port}`));
