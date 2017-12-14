//OnLoad
{
	document.getElementById('loading-btn').style.visibility = 'hidden';
	document.getElementById('msgsField').style.display = 'none';
	document.getElementById('msgSend').style.display = 'none';
	document.getElementById('estaConectado').style.display = 'none';
  // document.getElementById('send').disabled = true;
}

var Peer = require('simple-peer')
var peer = new Peer({
  initiator: location.hash === '#init',
  trickle: false
})

peer.on('signal', function (data) {
  document.getElementById('yourId').value = JSON.stringify(data)
})

document.getElementById('connect').addEventListener('click', function () {

  var otherId = JSON.parse(document.getElementById('otherId').value)
  peer.signal(otherId)

  connected();

})

document.getElementById('send').addEventListener('click', function () {

  if (!isThereText()) {

    // Adicionando o seu texto à sua própria janela
    console.log(document.getElementById('yourMessage').value);
    divAppend(document.getElementById('yourMessage').value, true);

    // Enviando o texto para o seu amigo
    var yourMessage = document.getElementById('yourMessage').value;
    peer.send(yourMessage);

    // Apagando o campo de mensagem
    document.getElementById('yourMessage').value = '';
  }

})

peer.on('data', function (data) {
  divAppend(data, false);
})

function connected() {
  document.getElementById('connect').disabled = true;
  document.getElementById('loading-btn').style.visibility = 'visible';

  openChat();
}

function openChat() {
  setTimeout(function() {
  	document.getElementById('conectar').style.display = 'none';
  	document.getElementById('titleMsg').style.display = 'none';
  	document.getElementById('estaConectado').style.display = 'block';
  	document.getElementById('msgsField').style.display = 'block';
  	document.getElementById('msgSend').style.display = 'block';
  }, 2500);
}

function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function divAppend(textMessage , isYou) {
    // Horário da mensagem
    var horario = getMsgTime();
    console.log(horario);
    var horarioSpan = document.createElement('span');
    var horarioTxt = document.createTextNode(horario);
    horarioSpan.appendChild(horarioTxt);
    horarioSpan.className = 'hours';

    // InnerDiv com todo o css
    var innerDiv = document.createElement('div');
    var innerTxt = document.createTextNode(textMessage);
    innerDiv.appendChild(innerTxt);
    innerDiv.appendChild(horarioSpan);
    isYou ? innerDiv.className = 'msg-sent' : innerDiv.className = 'msg-received';

    // OutterDiv com display flow-root
    var outterDiv = document.createElement('div');
    outterDiv.className = 'outter-div'
    outterDiv.appendChild(innerDiv);

    // Adicionando mensagem no corpo
    document.getElementById('messages').appendChild(outterDiv);
}

function isThereText() {
  return (document.getElementById('yourMessage').value.trim() === '');
}

function getMsgTime() {
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    hours < 10 ? hours = '  0' + hours : hours = '  ' + hours;
    mins < 10 ? mins = '0' + mins : mins = '' + mins;
    return hours + ':' + mins;
}


// Confirmation Handshaking 

