
// referencias html
const btnCrear       = document.querySelector('button');
const lblNuevoTicket = document.querySelector('#lblNuevoTicket');


const socket = io();

socket.on('connect', () => {
    console.log('Conectado');
    btnCrear.disabled = false;

});

socket.on('disconnect', () => {
    console.log('Desconectado del servidor');
    btnCrear.disabled = true;
});



btnCrear.addEventListener( 'click', () => {

    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        
        //console.log( 'Desde el server', ticket );
        lblNuevoTicket.innerText = ticket
    });



});

socket.on( 'ultimo-ticket', ( ultimo ) => {
    lblNuevoTicket.innerText = 'Ticket ' + ultimo;
});
