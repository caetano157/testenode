const express = requite('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({message: "server is up", status: 200});
})