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
    }

    inicializar(){
        this.tela.atualizarImagens(this.heroisIniciais)
        this.tela.configurarBotaoJogar(this.jogar.bind(this))
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

    jogar(){
        this.embaralhar()
        console.log('oi')
    }
}