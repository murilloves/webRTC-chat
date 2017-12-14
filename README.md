# Chat-WebRTC

Um chat simples como um Messenger utilizando WebRTC

## Setup

Estas instruções irão fazê-lo rodar o projeto localmente em sua máquina local para fins de desenvolvimento e teste. Para construir a aplicação online, basta rodar o comando ```npm run build``` e hospedá-lo no seu servidor na nuvem.

### Pré-requisitos

i) Tenha o [NodeJS](https://nodejs.org/en/) instalado em sua máquina

ii) Instale também o [io.js](https://iojs.org/en/index.html)

### Configurando a versão

1 - Clone a pasta 'basicVersion'

2 - Navegue até o diretório

3 - Instale os Node Modules
```
npm install
```

4 - Instale o Simple Peer
```
npm install simple-peer --save
```

5 - Rode a aplicação com ```npm start``` ou ```ng serve```

### Rodando a aplicação

Você precisará abrir duas abas, uma com o link **[localhost:9966](localhost:9966)** e a outra com **[localhost:9966/#init](localhost:9966/#init)**. Esta última **(#init)** irá gerar seu ID (Your ID) após aproximadamente 30 segundos, copie-o e cole na outra aba no campo 'Other ID' e clique em 'Connect'. Nesta aba irá surgir o 'Your ID', copie-o e cole no campo 'Other ID' da aba com link **#init**. Pronto, você já pode trocar mensagens.

## Melhorando a aplicação

Agora vamos adicionar algumas funcionalidades, primeiro exibir uma mensagem para o usuário quando ele se conectar.
- No **index.html**
```
    <div id="estaConectado" class="col-12 text-center estaConectado">
      <legend>Você está conectado <i class="fa fa-check text-success" aria-hidden="true"></i></legend>
    </div>
```
- No **index.js**
```
	document.getElementById('estaConectado').style.display = 'none';
. . . 
document.getElementById('connect').addEventListener('click', function () {

	var otherId = JSON.parse(document.getElementById('otherId').value);
	peer.signal(otherId);

	connected();

})
. . .
function connected() {
    document.getElementById('connect').disabled = true;
    document.getElementById('loading-btn').style.visibility = 'visible';

    openChat();
}
. . .
function openChat() {
	setTimeout(function() {
	  	document.getElementById('estaConectado').style.display = 'block';
	}, 2500);
}

```

Basta clonar o diretório **'improvedVersion'** e seguir os mesmos passos de configuração acima.

## Links úteis

https://webrtc.org/

https://www.npmjs.com/package/simple-peer

https://www.youtube.com/watch?v=ieBtXwHvoNk

