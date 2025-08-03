const btnproduct = document.getElementById('btnproduct');
const btnproduckkedua = document.getElementById('btnproduckkedua');
const btnproduckketiga = document.getElementById('btnproduckketiga');
const productpertama = document.getElementById('productpertama');
const garisbawah = document.querySelectorAll('.garisbawah');
const productkedua = document.getElementById('productkedua');
const prodductketiga = document.getElementById('productketiga')

function tampilkanproduct (ygditampilkan){
    productpertama.classList.add('hidden');
    productkedua.classList.add('hidden');
    prodductketiga.classList.add('hidden');

    ygditampilkan.classList.remove('hidden');
}

tampilkanproduct(productpertama);

btnproduct.addEventListener('click', () => {
    tampilkanproduct(productpertama);
});
btnproduckkedua.addEventListener('click', () => {
    tampilkanproduct(productkedua);
});
btnproduckketiga.addEventListener('click', () => {
    tampilkanproduct(productketiga);
});

garisbawah.forEach((item) => {
    item.addEventListener('click', () => {
        garisbawah.forEach((el) => {
            el.classList.remove('active');
        });
        item.classList.add('active');
    });
});




const bgclose = document.getElementById('bgclose');
const btnclose= document.getElementById('btnclose');
const coba = document.querySelectorAll('.coba');
let scrollPosition = 0;

coba.forEach(button => {
    button.addEventListener('click', openmodal);
});
function openmodal(){

    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    bgclose.classList.remove('hidden');

    document.body.style.position = 'fixed';
    document.body.style.overflow = 'hidden';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';    
}
function openclose () {
    bgclose.classList.add('hidden');

    document.body.style.position = '';
    document.body.style.overflow = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';    

    window.scroll(0, scrollPosition);
}

btnclose.addEventListener('click', openclose);

bgclose.addEventListener('click', function (e) {
    if (e.target === bgclose) {
        openclose();
    }
});
