const btnNav = document.getElementById('btn-nav-enlaces'),
    grid = document.getElementById('grid'),
    contNavMenu = document.getElementById('container-nav-menu'),
    btnTest = document.getElementById('btn-test'),
    enlacesNabPrin = document.querySelector('#container-nav .container-nav-menu1'),
    esMovil = () => window.innerWidth <= 768;
var counter = 1,
    intervalo = 4000;

btnNav.addEventListener('mouseover', () => {
    if(!esMovil()){
        grid.classList.add('activo');
    }

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
        if(!esMovil()) {
            grid.classList.remove('activo');
        }
    });
});

document.querySelectorAll('.grid .categoria-menu .enlaces a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(!esMovil()){
            document.querySelectorAll('#grid .categoria-menu3 .container-subcategorias').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(!esMovil()) {
                    if(categoria.dataset.categoria == e.target.dataset.categoria){
                        categoria.classList.add('activo');
                    }
                }
            });
        }
    });
});

document.querySelectorAll('#grid .container-subcategorias .enlaces-subcategorias-cont a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!esMovil()) {
            document.querySelectorAll('#grid .banner-subcategorias .container-subcategorias-img').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo');
                }
            });
        }
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

document.querySelectorAll('.container-slider .btns-slider-container a').forEach((test) => {
    test.addEventListener('click', (tst) => {
        document.querySelectorAll('.container-slider .container-slider-div').forEach((idk) => {
            if(idk.dataset.categoria == tst.target.dataset.categoria) {
                counter = idk.dataset.categoria;
            }
        });
    });
});


// CODIGO PARA MOBILE

// botones para abrir y cerrar principal

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault();
    enlacesNabPrin.classList.add('activo');
	document.querySelector('body').style.overflow = 'hidden';
});

document.querySelector('#btn-menu-regresar').addEventListener('click', (eee) => {
    eee.preventDefault();
    enlacesNabPrin.classList.remove('activo');
    document.querySelector('body').style.overflow = 'visible';
});

// evento para abrir el primer menu de categorias

document.querySelectorAll('.container-nav .container-nav-menu1 .enlaces a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        document.querySelectorAll('#grid .categoria-menu').forEach((categoria) => {
            categoria.classList.remove('activo');
            document.querySelector('#grid .categoria-menu3 .container-subcategorias').classList.remove('activo');
            if(categoria.dataset.categoria == e.target.dataset.categoria){
                grid.classList.add('activo');
                categoria.classList.add('activo');
                document.querySelectorAll('#grid .categoria-menu3 .container-subcategorias').forEach((categoria) => {
                    categoria.classList.remove('activo');
                });
            }
        });
    });
});

// evento para cerrar categorias y volver al nav principal

document.querySelectorAll('#grid .categoria-menu .btn-menu-regresar').forEach((evento) => {
    evento.addEventListener('click', (e) => {
        e.preventDefault();
        grid.classList.remove('activo');
        categoria.classList.remove('activo');
    });
});