const Wemo = require('wemo-client')
const wemo = new Wemo();
const command = process.argv[2];


wemo.discover(deviceInfo => {
  var client = wemo.client(deviceInfo);

  if (command === 'on') {
    client.setBinaryState(1, () => process.exit());
  } else if (command === 'off') {
    client.setBinaryState(0, () => process.exit());
  }


  return;
  setInterval(() => {
    state = state === 0 ? 1 : 0;
    client.setBinaryState(state);
  }, 1000);
});
