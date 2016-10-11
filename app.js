 // var app = require('express')() //use the express js framework to server out html files (handle the request and response on the server)
var express = require('express') // Hey we want to use express, our web host / routing system
var app = express(); // starts express
var server = require('http').Server( app ) //start a server instance on a port
var io = require('socket.io')(server) // use socket.io for real time connections aka wesockets

server.listen(4050, function(){ // set up a server on port 3000, do a callback when it started succesfully

  console.log("server started on 4050")

})

app.use( express.static('public') ) // server out everything that is in the public folder


io.on('connection', function(socket){ // if socket.io sees a new connection, do something with them...
  console.log(socket.id) // prints out the socket that connected (ie: all users + the projection)


  socket.on('addRectangle', function(data){ // look for any messages with the 'addRectangle'
    console.log("addRectangle" + data); // log out the 'data' in this case you get true, but you could use this to get any arbitrary data you want, think position color, etc
    io.emit('projectionRectangle', data) // sends out a message to the projection to add a rectangle to the screen


  })

})
