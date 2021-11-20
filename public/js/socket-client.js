// Referencias del HTML
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', () => {
    console.log('Conectado');

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', () => {
    console.log('desconectado');

    lblOffline.style.display = '';
    lblOnline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload) => {
    console.log(payload);
})

btnEnviar.addEventListener('click', () => {
    const mensaje = txtMensaje.value;

    socket.emit('enviar-mensaje', {
        mensaje,
        id: 'asdasd',
        fecha: new Date().getTime(),
    }/*, (id) => {
        console.log('Desde el server', id);
    }*/);
})