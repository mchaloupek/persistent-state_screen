var socket = io.connect('http://localhost:4050') // set up a place for us to connect to, and try to connect

socket.on('connect', function(data){  // when we are connected do something
  console.log("connected to server" + socket.id); // log out our socket's id, some long garbled number letter thing that is unique
})

socket.on('confusedReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    // use jquery to add a rectangle to the screen, notice the alternate jquery syntax
    // var h = window.innerHeight
    // var w = window.innerWidth

  // first make a div, then change the css, then append to the body. This is not possible with the 'normal' syntax because order of operations (with chained methods)
    $('<div>How does this affect me?</div>').css({
      'top': Math.random,
      'left': Math.random,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})

socket.on('disbeliefReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div>How big were those glaciers?</div>').css({
      'top': Math.random,
      'left': Math.random,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})

socket.on('insecurityReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div>Could this place exist in twenty years?</div>').css({
      'top': Math.random,
      'left': Math.random,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})

socket.on('longingReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div>How can I visit this place?</div>').css({
      'top': ,
      'left': ,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})

socket.on('angerReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div>Who would cause this destruction?</div>').css({
      'top': ,
      'left': ,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})

socket.on('sadnessReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div>the beauty is leaving...</div>').css({
      'top': ,
      'left': ,
      'color': 'red',
      'font-family': 'Didact Gothic',
      'font-size': '15px'


    }).appendTo('body')

})
