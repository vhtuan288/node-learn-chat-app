var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    to: 'Tuan',
    text: 'That work for me.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
})