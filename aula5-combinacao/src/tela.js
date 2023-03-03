//metodos staticos nao podem acessar o 'this'
//por isso, nao vamos colocar o util no contructor
const util = Util

const ID_CONTEUDO = "heroes"
const ID_BTN_JOGAR = 'jogar'
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const ID_CARREGANDO = "carregando"
const ID_CONTADOR = 'contador'
const ID_BTN_MOSTRAR_TUDO = 'mostrarTudo'
const MENSAGENS = {
    sucesso:{
        texto:'Parabéns você acertou!!',
        classe:'alert-success'
    },
    erro: {
        texto:'Infelizmente você errou, tente novamente!',
        classe:'alert-danger'
    }
}
class Tela {
    static obterCodigoHtml(item){
        return `
        <div class="col-md-3">
            <div class="card mt-4" style="width:50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
                <img src="${item.img}" name="${item.nome}" class="card-img-top" alt="batman icon">
            </div>
            <br />
        </div>
        `
    }

    static configurarBotaoVerificarSelecao(funcaoOnClick){
        window.verificarSelecao = funcaoOnClick
    }

    static alterarConteudoHtml(codigoHtml) {
        const conteudo = document.getElementById(ID_CONTEUDO)
        conteudo.innerHTML = codigoHtml
    }

    static gerarStringPelaImagem(itens){
        return itens.map(Tela.obterCodigoHtml).join('')
    }

    static atualizarImagens(itens){
        const codigoHtml = Tela.gerarStringPelaImagem(itens)
        Tela.alterarConteudoHtml(codigoHtml)
    }

    static configurarBotaoJogar(funcaoOnClick){
        const btnJogar = document.getElementById(ID_BTN_JOGAR)
        btnJogar.onclick = funcaoOnClick
    }

    static exibirHerois(nomeDoHeroi, img) {
        const elementosHtml = document.getElementsByName(nomeDoHeroi)
        //para cada elemento encontrado na tela, vamos alterar a imagem
        //para a imagem  inicial dele
        //com o foreach, para cada item, dentro dos () setamos o valor
        // de imagem
        elementosHtml.forEach(item => (item.src = img))
    }
    
    //success por default será true, caso nao seja passado nenhum valor para ele
    static async exibirMensagem(sucesso =  true){
        const elemento = document.getElementById(ID_MENSAGEM)
        if(sucesso){
            elemento.classList.remove(MENSAGENS.erro.classe)
            elemento.classList.add(MENSAGENS.sucesso.classe) 
            elemento.innerText = MENSAGENS.sucesso.texto
        }else{
            elemento.classList.remove(MENSAGENS.sucesso.classe)
            elemento.classList.add(MENSAGENS.erro.classe) 
            elemento.innerText = MENSAGENS.erro.texto
        }

        elemento.classList.remove(CLASSE_INVISIVEL)
        await util.timeout(3000)
        elemento.classList.add(CLASSE_INVISIVEL)
    }

    static exibirCarregando(mostrar = true){
        const carregando = document.getElementById(ID_CARREGANDO)
        if(mostrar){
            carregando.classList.remove(CLASSE_INVISIVEL)
            return;
        }

        carregando.classList.add(CLASSE_INVISIVEL)
    }

    static inicializarContador(){
        let contarAte = 3;
        const elementoContador = document.getElementById(ID_CONTADOR)
        //vamos substituir o texto começando $$contador segundos
        //onde está o $$contador adicionaremos o valor
        const identificadorNoText = '$$contador'
        const textoPadrao = `Começando em ${identificadorNoText} segundos...`
        //vamos criar uma funcao em linha para atualizar o texto
        //a cada segundo
        const atualizarTexto = () => {
            (elementoContador.innerHTML = textoPadrao.replace(identificadorNoText, contarAte--))
        }

        atualizarTexto()
        const idDoIntervalo = setInterval(atualizarTexto,1000) //A CADA 1 SEGUNDO CHAMA A FUNÇÃO ATUALIZARTEXTO
        //retornamos o idIntervalo para parar ele mais tarde
        return idDoIntervalo;
    }

    static limparContador(idDoIntervalo){
        clearInterval(idDoIntervalo) // vai parar o intervalo
        //deixamos sem texto
        document.getElementById(ID_CONTADOR).innerHTML = ''
    }

    static configurarBotaoMostrarTudo(funcaoOnClick){
        const btnMostrarTudo = document.getElementById(ID_BTN_MOSTRAR_TUDO)
        btnMostrarTudo.onclick = funcaoOnClick
        
    }
}