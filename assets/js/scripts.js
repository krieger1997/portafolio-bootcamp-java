// se implementan tooltips de bootstrap ya que title no funciona en elementos svg
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const alerta = new bootstrap.Modal(document.getElementById('modal-alerta'));

const cargando = document.getElementById('cargando');
const form = document.getElementById('form-contacto');
const btn = document.getElementById('btn-enviar');
btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    if (validaForm()) {
        btn.setAttribute('disabled', true);
        document.getElementById('texto-submit').innerText="Enviando...";
        cargando.classList.remove('d-none');
        setTimeout(() => {//se usa para ejecutar funcion luego de 2.5 segundos
            simulaEnviado();
        }, 2500);
    }
});


const navLinks = document.getElementsByClassName('nav-link');
const arrNavLinks = Array.from(navLinks);//se crea array desde conjunto de elementos capturados con getElementsByClassName('nav-link');
for (const navLink of navLinks) {
    navLink.addEventListener('click',(ev)=>{
        arrNavLinks.forEach(el => el.classList.remove('active'));
        navLink.classList.add('active');
    })    
}


function simulaEnviado() {

    form.reset();
    cargando.classList.add('d-none');
    document.getElementById('texto-submit').innerText="Enviar";
    btn.removeAttribute('disabled');
    alerta.show();

}

function validaForm() {
    const email = document.getElementById('input-email').value.trim();
    const nombre = document.getElementById('input-nombre').value.trim();
    const mensaje = document.getElementById('input-mensaje').value.trim();
    if(!validaEmail(email)){
        alert("Email no cumple con formato correcto.")
 
        return false;
    }else if (email == '' || nombre == '' || mensaje == '' ) {
        alert("Debe completar todos los campos.")
 
        return false;
    } else {
        return true;
    }

}

function validaEmail(email) {
    var expresionReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return expresionReg.test(email);//se valida formato de email 
  }