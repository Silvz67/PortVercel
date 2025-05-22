function enviarMensagem(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5582996117038'

    const texto = `Olá, meu nome é *${nome}*, ${mensagem}`
    const msgformatada = encodeURIComponent(texto)

    const url = `https://wa.me/${telefone}?text=${msgformatada}`

    console.log(url)
    window.open(url, '_blank')
}
