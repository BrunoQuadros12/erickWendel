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
                img:'./arquivos/shazam.png',
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
         this.tela.configurarBotaoJogar(this.jogar)
    }

    jogar(){
        console.log('foi')
    }
}