var socket = io.connect('http://150.253.91.85:4050') // set up a place for us to connect to, and try to connect

socket.on('connect', function(data){  // when we are connected do something
  console.log("connected to server" + socket.id); // log out our socket's id, some long garbled number letter thing that is unique
})

socket.on('confusedReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    // use jquery to add a rectangle to the screen, notice the alternate jquery syntax
    // var h = window.innerHeight
    // var w = window.innerWidth

  // first make a div, then change the css, then append to the body. This is not possible with the 'normal' syntax because order of operations (with chained methods)
    $('<div class="vertAnim1">How does this affect me?</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '16px',
      'font-weight': '500'

    }).appendTo('.containederer')


})

socket.on('disbeliefReaction', function(data){ // if we see a projectionRectangle message then do some stuff

  console.log(data);

    $('<div class="vertAnim20">How big were those glaciers?</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '14px',
      'font-weight': '500'


    }).appendTo('.containederer')

})

socket.on('insecurityReaction', function(data){

  console.log(data);

    $('<div class="vertAnim40">Could this place exist in twenty years?</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '16px',
      'font-weight': '500'


    }).appendTo('.containederer')

})

socket.on('longingReaction', function(data){

  console.log(data);

    $('<div class="vertAnim60">How can I visit this place?</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '16px',
      'font-weight': '500'


    }).appendTo('.containederer')

})

socket.on('angerReaction', function(data){

  console.log(data);

    $('<div class="vertAnim80">Who would cause this destruction?</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '12px',
      'font-weight': '500'


    }).appendTo('.containederer')

})

socket.on('sadnessReaction', function(data){

  console.log(data);

    $('<div class="vertAnim90">The beauty is fading...</div>').css({

      'color': 'rgb(200, 90, 120)',
      'font-family': 'Raleway',
      'font-size': '12px',
      'font-weight': '500'


    }).appendTo('.containederer')

})
