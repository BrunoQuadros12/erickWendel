class MemoryGame{
    constructor({
        tela
    }){
        this.tela  = tela
        this.heroisIniciais = [
            {
                img:'./arquivos/batman.png',
                nome:'Batman'
            },
            {
                img:'./arquivos/superman.png',
                nome:'Superman'
            },
            {
                img:'./arquivos/flash.png',
                nome:'Flash'
            },
            {
                img:'./arquivos/aquaman.png',
                nome:'Aquaman'
            }
        ]
        this.iconePadrão = './arquivos/hide.png'    
        this.heroisEscondidos = []
        this.heroisSelecionados = []                                                                     
    }

    inicializar(){
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
        this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
     }

     embaralhar(){
        //duplicando Itens
        const copias = this.heroisIniciais
        .concat(this.heroisIniciais)
        .map(item => {
            return Object.assign({}, item, {id:Math.random()/0.5})
        })
        .sort(() => Math.random() - 0.5)
        this.tela.atualizarImagens(copias)
        //entrar em cada item e criar um id aleatorio

        setTimeout(()=> {
            this.esconderHerois(copias)
        },1000)
     }

     esconderHerois(herois){
        //vamos trocar a imagem de todos os herois existentes
        const heroisOcultos = herois.map(({nome,id}) => ({
            id,
            nome,
            img:this.iconePadrão
        }))

        this.tela.atualizarImagens(heroisOcultos)
        this.heroisEscondidos = heroisOcultos
     }

     verificarSelecao(id, nome){
        const item = { id, nome }
        console.log('item', item)
        const heroisSelecionados = this.heroisSelecionados.length
        switch(heroisSelecionados){
            case 0:
                //adiciona a escolha na lista, esperando pela proxima
                //clicada]
                this.heroisSelecionados.push(item)
                break;
            case 1:
                //se a quantidade de escolhidos for 1,significa
                //que o usurario so pode escolher mais um
                //vamos obter o primeiro item da lista
                console.log('herois',this.heroisSelecionados)
                const [opcao1] = this.heroisSelecionados
                console.log('opcao',  opcao1)
                //zerar itens para nao selecionar mais de dois
                this.heroisSelecionados = []
                //conferimos se os noms e os id batem
                //o esperado
                if(
                    opcao1.nome === item.nome && opcao1.id !== item.id
                    //aqui verificamos se sao ids diferentes
                    //para o usuario nao clicar duas vezes no mesmo
                ){
                    alert('combinação correta ' + item.nome)
                    //para a execucao
                    return
                }
                alert('combinação incorreta')
                //fim do case
                break;
        }
     }

    jogar(){
        this.embaralhar()
    }
}