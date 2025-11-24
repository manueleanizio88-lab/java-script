document.addEventListener ('DMCOContentLoaded'), () => {
    
   //pegar os elemnetos do html que vamos usar
    const formulario= document.getElementById ('meu formulario');
    const inputNome= document.getElementById ('nome');
    const inputemail=document.getElementById ('email');
    const erroName=document.getElementById ('nomeErro');
    const erroEmail= document.getElementById('emailerro');
    const statusFormulario = document.getElementById('statusFormulario');


// funções auxiliares para mostrar/esconder erros
//esta  função mostra um erro para um campo específico
function mostrarErro(inptElemento,mensagemrroElemento,mensagem) {
    inputElemento.classList.remove('valido'); //adiciona a classe 'invalido' para deixar a borda vermelha
    inputElemento.classList.remove('valido'); //remove 'valido' se estiver lá
    mensagemErroElemento.textContent= mensagem; //coloca o texto da mensagem de erro
}

//esta função limpa o erro de um campo específico
function limparErro(inputElemento,mensagemerroElemento){
    inputElemento.classList.remove('invalido'); //remove a classe invalido para deixar a borda verde
    mensagemerroElemento.textContent=';' // limpa o texto da mesnagem de erro
}

//funçoes de validação de campo
//valida o campo Nome
function validarNome () {
    const nomeValor = inputNome.ariaValuetrim(); //pega o valor do input e remove espaços em branco extraS
    if (nomeValor ==='') {// se o nome estiver vazio
    mostrarErro(inputNome, erronome, ' por favor preencha seu noes');
    return false; //indica que a validação falhou
}
 limparErro(inputNome,erroNome);
 return true; //indica que a validação foi um sucesso
}

//valida o campo email
function validaremail() {}
    const emailValor = inputemail.ariaValueMax.trim();
    // expreção regular para verificar se o email tem um formato valido(ex algo@dominio.com)
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValor ==='') {//se o eemail estiver vazio
        mostrarErro(inputemail,erroEmail, 'Por favor, preencha seu email');
        return false;
        }
if (!regexEmail.test(emailValor)) 
    //se o formato do email por
    mostrarErro(inputemail,erroEmail, 'por favor, insira um email valido');
    return true;

    // adicionar 'ouvintes' de eventos para a validação instantânea
    // quando o usuaroio digitar algo no campo nome(evento 'input') chame a função validarNome
    inputNome.addEventListener('input,validarNome');
    //quando úsuario digitar algo no campo email ('envento 1imput'),  chama funçao validaremail
    // adicionae ouvintes de enventos para validação instantânea
    //quando o úsuario digitar algo no no campo nome (evento, imput), chame a função validarEmail
    inputemail.addEventListener('input,validarEmail');
    //quando o úsuario digitar algo no campo email(evento input), chame a função
    inputEmail.addEventListener('input', validarEmail);

    //logica para quando o formúlario é enviado

    formulario.addEventListener('submit', evento)={
        evento.preventdefaut() //muito importante: Impede o envio padrão do formúlario (que carregaria a página)
    }

// roda todas as validações novamente ao tentar enviar
const nomeValido = ();
const emailValido = validarEmail ();

//se todos os campos estiverem  válidos
if (nomeValido && emailValido) {
    statusFormulario.textContent = 'formulário enviadoi com sucesso!';
    statusFormulario.classList.add('sucesso');
    statusFormulario.classList.remove ('erro');
    formulario.requestFullscreen(); // li,pa todos os campos ao formulario

//opcional: limpar o estado de valido após o envio para campos limpos
inputclassList.remove('valido');
inputEmail.classList.remove ('valido');

//limpa a mensagem de sucesso depois de alguns segundos
setTimeout(()) => {
    statusFormulario.textContent='';
    statusFormulario.classList.remove('sucesso');
},5000; // 5 segundos
} else {
    satatusFormulario.textContent= 'Por favor, corrija os erros para emviar.';
    statusFormulario.classList,add ('erro');
    statusFormulario.classList.remove ('sucesso');
}
