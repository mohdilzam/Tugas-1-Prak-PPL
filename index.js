// Aplikasi Kalkulator

const math = require('./solution');
const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const operations = {
    '1': { name: 'Penjumlahan', func: math.tambah },
    '2': { name: 'Pengurangan', func: math.kurang },
    '3': { name: 'Perkalian', func: math.kali },
    '4': { name: 'Pembagian', func: math.bagi },
    '5': { name: 'Pangkat', func: math.pangkat },
    '6': { name: 'Faktorial', func: math.faktorial, singleInput: true },
    '7': { name: 'Cek Bilangan Prima', func: math.isPrima, singleInput: true },
    '8': { name: 'Modulus', func: math.modulus },
    '9': { name: 'Nilai Absolut', func: math.absolut, singleInput: true },
    '10': { name: 'Maksimum', func: math.maksimum },
    '11': { name: 'Minimum', func: math.minimum },
    '12': { name: 'Bulatkan', func: math.bulatkan, singleInput: true }
};

console.log("=== Kalkulator Sederhana ===");
Object.keys(operations).forEach(key => console.log(`${key}. ${operations[key].name}`));

const getNumberInput = (prompt, callback) => {
    rl.question(prompt, num => {