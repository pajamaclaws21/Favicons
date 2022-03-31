function read(file) {
  const fs = require('fs');
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data;
  } catch (err) {
    console.error(err);
  }
}

function write(file, thing) {
  const fs = require('fs');
  const content = read(file) + '\r\n' + thing;
  fs.appendFile(file, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

function sendMessage() {
  write('chat.txt', document.getElementById('message').value);
  document.getElementById('history').innerHTML = read('chat.txt');
  console.log('SENT');
}

document.getElementById('sendMessage').onclick = sendMessage();
