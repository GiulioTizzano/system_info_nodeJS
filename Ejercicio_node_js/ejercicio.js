const os = require('os');
const fs = require('fs');


const config = JSON.parse(fs.readFileSync('config.json', 'utf-8'));


console.log('=== Información inicial ===');
console.log('Versión de Node.js:', process.version);
console.log('Sistema operativo:', os.type(), os.release());
console.log('===========================\n');

function mostrarInfo() {
  console.log('--- Información del sistema ---');
  console.log('Uso de CPU (carga media):', os.loadavg());
  console.log('Uso de memoria:', (os.totalmem() - os.freemem()) / os.totalmem() * 100, '%');
  console.log('Tiempo activo del sistema:', os.uptime(), 'segundos');
  console.log('Tiempo ejecutándose Node.js:', process.uptime(), 'segundos');
  console.log('--------------------------------\n');
}
// mostrarInfo()
setInterval(mostrarInfo, config.intervalSeconds * 1000);
