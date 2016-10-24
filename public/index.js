var socket = io.connect('http://localhost:4050') // connect to the server

socket.on('connect', function(data){ // when connected do something
  console.log("connected to server" + socket.id); // log out our id
})

// $('#react1').click(function(e)
$('#react1').click(function(e){ // on click, do something

  console.log(e);

  // $('<div></div>').css({
  //   'position':'absolute',
  //   'top':e.clientY,
  //   'left':e.clientX,
  // }).appendTo('body')
  //
  // var dataToSend = {
  //   'top':e.clientY,
  //   'left':e.clientX,
  //
  // }

  socket.emit('confusedList') 
})

$('#react2').click(function(e){

  console.log(e);

  socket.emit('disbeliefList')
})

$('#react3').click(function(e){

  console.log(e);

  socket.emit('insecurityList')
})

$('#react4').click(function(e){

  console.log(e);

  socket.emit('longingList')
})

$('#react5').click(function(e){

  console.log(e);

  socket.emit('angerList')
})

$('#react6').click(function(e){

  console.log(e);

  socket.emit('sadnessList')
})
