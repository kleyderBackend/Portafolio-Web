const demoButtons = document.querySelectorAll(".btn-view-demo");

demoButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: '🚧 En construcción',
            text: 'La demo aún no está disponible',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
    });
});

const disabledCodeBtns = document.querySelectorAll(".btn-code-disabled");

disabledCodeBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Código no disponible',
            text: 'Códigos no disponibles por confidencialidad.',
            icon: 'warning',
            confirmButtonText: 'Ok'
        });
    });
});