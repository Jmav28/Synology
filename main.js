const btnNav = document.getElementById('btn-nav-enlaces'),
    grid = document.getElementById('grid');

btnNav.addEventListener('mouseover', () => {
    grid.classList.add('activo');

    document.querySelectorAll('.container-nav .enlaces a').forEach((elemento) => {
        elemento.addEventListener('mouseenter', (e) => {
            document.querySelectorAll('.container-grid .grid .categoria-menu').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        });
    });

    grid.addEventListener('mouseleave', () => {
        grid.classList.remove('activo');
    });
});

document.querySelectorAll('.grid .categoria-menu .enlaces a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        document.querySelectorAll('#grid .categoria-menu3 .container-subcategorias').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
    });
});

document.querySelectorAll('#grid .container-subcategorias .enlaces-subcategorias-cont a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        document.querySelectorAll('#grid .banner-subcategorias .container-subcategorias-img').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
    });
});