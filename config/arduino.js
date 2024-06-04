const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const com = new SerialPort({
  path: "COM7",
  baudRate: 9600,
  dataBits: 8,
  stopBits: 1,
  parity: "none",
});

const parser = com.pipe(new ReadlineParser({ delimiter: "\r\n" }));

const latestData = { soilHumidity: null, humidity: null, temperature: null };

parser.on("data", (data) => {
  let soilMatch = data.match(/Soil humidity: (\d+)/);
  let humidityMatch = data.match(/Humidity: (\d+\.\d+)/);
  let temperatureMatch = data.match(/Temperature: (\d+\.\d+)/);

  if (soilMatch) {
    latestData.soilHumidity = parseInt(soilMatch[1], 10);
  }
  if (humidityMatch) {
    latestData.humidity = parseFloat(humidityMatch[1]);
  }
  if (temperatureMatch) {
    latestData.temperature = parseFloat(temperatureMatch[1]);
  }
});

module.exports = { com, parser, latestData };
