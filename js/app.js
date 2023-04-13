let btnThemeLight = document.querySelector('#btnThemeLight');
let btnThemeDark = document.querySelector('#btnThemeDark');

btnThemeDark.addEventListener('click', ()=> cambiarTema('light'));
btnThemeLight.addEventListener('click', ()=> cambiarTema('dark'));

// Leer el localStorage

let temaConfigurado = JSON.parse(localStorage.getItem('tema')) || 'dark';
console.log(temaConfigurado);
cambiarTema(temaConfigurado);


function cambiarTema(color){
    console.log(color)
    //data-bs-theme = 'light/dark'
    document.querySelector('html').setAttribute('data-bs-theme', color);
    //Guardar en LocalSorage
    localStorage.setItem('tema', JSON.stringify(color));
}