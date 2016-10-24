var socket = io.connect('http://150.253.89.159:4050') // connect to the server

socket.on('connect', function(data){ // when connected do something
  console.log("connected to server" + socket.id); // log out our id
})

// ~~~~~~~~~~~~~~~~~~~~~~

$('html, body').on('touchstart touchmove', function(e){
     //prevent native touch activity like scrolling
     e.preventDefault();
});


// ~~~~~~~~~~~~~~~~~~~~~~


// $('#react1').click(function(e)
$('#react1').on('touchstart click', function(e){ // on click, do something



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

$('#react2').on('touchstart click', function(e){

  console.log(e);

  socket.emit('disbeliefList')
})

$('#react3').on('touchstart click', function(e){

  console.log(e);

  socket.emit('insecurityList')
})

$('#react4').on('touchstart click', function(e){

  console.log(e);

  socket.emit('longingList')
})

$('#react5').on('touchstart click', function(e){

  console.log(e);

  socket.emit('angerList')
})

$('#react6').on('touchstart click', function(e){

  console.log(e);

  socket.emit('sadnessList')
})
