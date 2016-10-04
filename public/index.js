var socket = io.connect('http://localhost:4050') // connect to the server

socket.on('connect', function(data){ // when connected do something
  console.log("connected to server" + socket.id); // log out our id
})

$('body').click(function(e){ // on click, do something

  console.log(e);

  $('<div>🍅</div>').css({
    'position':'absolute',
    'top':e.clientY,
    'left':e.clientX,
  }).appendTo('body')

  var dataToSend = {
    'top':e.clientY,
    'left':e.clientX,

  }

  socket.emit('addRectangle', dataToSend) // send out a message of addRectangle to the server, it will handle the details (party planning) !
})
