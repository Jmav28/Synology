const btnNav = document.getElementById('btn-nav-enlaces'),
    grid = document.getElementById('grid');

document.querySelectorAll('#container-nav .enlaces a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
        
        grid.classList.add('activo');

        grid.addEventListener('mouseleave', () => {
            grid.classList.remove('activo');
        });

		document.querySelectorAll('#grid .categoria-menu').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
	});
});

document.querySelectorAll('#container-subcategorias .enlaces-subcategorias-cont a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
        document.querySelectorAll('.container-subcategorias .banner-subcategorias .container-subcategorias-img').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria === e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
	});
});

document.querySelectorAll('#grid .enlaces a').forEach((elemento) => {
	elemento.addEventListener('mouseenter', (e) => {
        document.querySelectorAll('.container-subcategorias').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria === e.target.dataset.categoria){
                categoria.classList.add('activo');
            }
        });
	});
});