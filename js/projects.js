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
