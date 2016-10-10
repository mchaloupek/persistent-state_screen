var socket = io.connect('http://localhost:4050') // set up a place for us to connect to, and try to connect

socket.on('connect', function(data){  // when we are connected do something
  console.log("connected to server" + socket.id); // log out our socket's id, some long garbled number letter thing that is unique
})

socket.on('projectionRectangle', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    // use jquery to add a rectangle to the screen, notice the alternate jquery syntax
    var h = window.innerHeight
    var w = window.innerWidth

  // first make a div, then change the css, then append to the body. This is not possible with the 'normal' syntax because order of operations (with chained methods)
    $('<div>🍳</div>').css({
      'position':'absolute',
      'top': data.top,
      'left': data.left,

    }).appendTo('body')

})

socket.on('storedPositionsMessage', function(spData){
  console.log(spData);
    spData.forEach(function(position){
      $('<div>🍞</div>').css({
        'position': 'absolute',
        'top': position.top,
        'left': position.left,
      }).appendTo('body')

    })


})
