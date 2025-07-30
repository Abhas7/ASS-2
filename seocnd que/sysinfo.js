// sysinfo.js
const os = require('os');

function getSystemInfo() {
    const cpus = os.cpus();
    const totalMemMB = os.totalmem() / (1024 * 1024);
    const freeMemMB = os.freemem() / (1024 * 1024);
    const heapUsedMB = process.memoryUsage().heapUsed / (1024 * 1024);
    const heapTotalMB = process.memoryUsage().heapTotal / (1024 * 1024);

    console.log('System Information:');
    console.log('---------------------------');
    console.log(`Architecture: ${os.arch()}`);
    console.log(`CPU Cores: ${cpus.length}`);
    console.log(`CPU Model: ${cpus[0].model}`);
    console.log(`CPU Speed: ${cpus[0].speed / 1000} GHz`); // speed is in MHz
    console.log(`Total Memory: ${totalMemMB.toFixed(0)} MB`);
    console.log(`Free Memory: ${freeMemMB.toFixed(0)} MB`);
    console.log(`Heap Memory Used: ${heapUsedMB.toFixed(0)} MB`);
    console.log(`Heap Memory Total: ${heapTotalMB.toFixed(0)} MB`);
    console.log(`Hostname: ${os.hostname()}`);
    console.log(`OS Type: ${os.type()}`);
}

module.exports = { getSystemInfo };
