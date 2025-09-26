const inputName = document.getElementById("input-name");
const inputtEmail = document.getElementById("input-email");
const inputMessage = document.getElementById("input-message");
const btnSend = document.getElementById("btn-message");

btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    if (!inputName.value.trim()  || !inputtEmail.value.trim() || !inputMessage.value.trim()) {
        Swal.fire({
            title: 'Campos Vacio',
            text: 'Los Todos los campos estan Vacios , Por favor llene los campos',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/
    if (!regexEmail.test(inputtEmail.value.trim())) {
        Swal.fire({
            title: 'Email Incorrecto',
            text: 'El email ingresado no es valido',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }
    if (!inputMessage.value.length > 250) {
        Swal.fire({
            title: 'Mensaje Largo',
            text: 'El mensaje es demaciado largo,intente de nuevo',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
        return;
    }
    Swal.fire({
        title: 'Mensaje Enviado',
        text: `${inputName.value} Su mensaje Fue enviado`,
        icon: 'success',
        confirmButtonText: 'Ok'
    });
    return;
});