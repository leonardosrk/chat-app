var socket = io();

socket.on('connect', function ()  {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Claudia',
    text: 'Hey. This is Claudia'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });
