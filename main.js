const btnNav = document.getElementById('btn-nav-enlaces'),
    grid = document.getElementById('grid'),
    contNavMenu = document.getElementById('container-nav-menu'),
    btnTest = document.getElementById('btn-test');
var counter = 1,
    intervalo = 3000;

btnNav.addEventListener('mouseover', () => {
    grid.classList.add('activo');

    document.querySelectorAll('.container-nav .enlaces a').forEach((elemento1) => {
        elemento1.addEventListener('mouseenter', (ee) => {
            document.querySelectorAll('.container-grid .grid .categoria-menu').forEach((categoria1) => {
                categoria1.classList.remove('activo');
                if(categoria1.dataset.categoria === ee.target.dataset.categoria){
                    categoria1.classList.add('activo');
                } 
            });
            document.querySelectorAll ('#grid .categoria-menu3 .container-subcategorias-prin').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(!categoria.className.endsWith('activo')){
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
    elemento.addEventListener('click', (e) => {
        document.querySelectorAll('#grid .categoria-menu3 .container-subcategorias').forEach((categoria) => {
            categoria.classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                categoria.classList.add('activo');
                // elemento.classList.add('activo');
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

// SLIDER

setInterval(function(){
    slides();
}, intervalo);

function slides(){
    document.querySelectorAll('.container-slider .container-slider-div').forEach((objt) => {
        objt.classList.remove('activo');
        if(objt.dataset.categoria == counter) {
            objt.classList.add('activo');
        }
    }); 
    counter++;
    if(counter > 4) {
        counter = 1;
    }
};

