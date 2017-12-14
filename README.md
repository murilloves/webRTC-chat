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

Você precisará abrir duas abas, uma com o link **[localhost:9966](localhost:9966)** e a outra com **[localhost:9966/#init](localhost:9966/#init)**. Esta última **(#init)** irá gerar seu ID (Your ID) após aproximadamente 30 segundos, copie-o e cole na outra aba no campo 'Other ID' e clique em 'Connect'. Copie o 'Your ID' desta aba e cole no campo 'Other ID' da aba com link **#init**. Pronto, você já pode trocar mensagens.

## Links úteis

https://webrtc.org/

https://www.npmjs.com/package/simple-peer

https://www.youtube.com/watch?v=ieBtXwHvoNk

