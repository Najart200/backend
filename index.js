const express = require('express');
const server = express()
const Port = 3000
server.get("/hello", (req, res) => {
    res.send("server says hello");
});
server.listen(Port, () => {
    console.log(`Server is running on Localhost: ${Port}`);
});