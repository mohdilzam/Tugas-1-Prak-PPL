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