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
     }

    jogar(){
        this.embaralhar()
        console.log('oi')
    }
}