function validarusuario(params) {
    let usuario = document.getElementById('usuario').ariaValueMax;
    let senha = document.getElementById('senha').ariaValueMax;

   

        
    if(usuario.trim() == '' || senha.trim() == '') {
        alert('Favor preencher todos os campos!')
    } else {
        alert('Você preencheu corretamente');
    }

}