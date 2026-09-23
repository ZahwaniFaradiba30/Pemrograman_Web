console.log(10 % 3);

const angka = 8;
const genap = angka % 2 == 0;

console.log(genap);

const hasil = (10 + 5) * 2;

console.log(hasil);

const nilai = 80;
const lulus=  nilai >= 75;

console.log(`Apakah siswa lulus? ${lulus}`);

console.log(5 == "5");
console.log(5 === "5");

let umur = 18;
let punyaKTP = true;

let bolehMasuk = umur >= 17 && punyaKTP;
console.log(bolehMasuk);

const usia = 60;
const anggota = false;

const mendapatDiskon =
  usia >= 55 || anggota === true;

console.log(mendapatDiskon);

const sedangLibur = false;

console.log(!sedangLibur);

const sudaahLogin = false;

if (!sudaahLogin) {
    console.log("Silahkan login terlebih dahulu.");
}

let total = 50;
console.log(total += 25);
console.log(total -= 10);

let a = 5;
console.log(a++);
console.log(a);

let b = 5;
console.log(++b);

let Umur = 20;
let status = umur >= 18 ? "Boleh minum kopi" : "Belum boleh minum kopi";
console.log(status);

let Nilai = 72;
let Hasil = nilai >= 75 ? "Lulus" : "Tidak Lulus";
console.log("Hasil: " + hasil);

let Niilai = 85;
let predikat = nilai >= 90 ? "A" :
               nilai >= 80 ? "B" :
               nilai >= 70 ? "C" : "D";
console.log("Predikat: " + predikat);

let hujan = true;

if (hujan) {
    console.log("Jangan lupa bawa payung!");
}

let nilaii = 80;

if (nilai >= 75) {
    console.log("Kamu lulus!");
} else {
    console.log("Kamu belum lulus.");
}

let skor = 82;

if (skor >= 90) {
    console.log("Predikat: A");
} else if (skor >= 80) {
    console.log("Predikat: B");
} else if (skor >= 70) {
    console.log("Predikat C");
} else {
    console.log("Predikat: D");
}

if (nilai >= 70) {
    predikat = "C";
} else if (nilai >= 80) {
    predikat = "B";
} else if (nilai >= 90){
    predikat = "A";
}

const sudahLogin = true;
const role = "admin";

if (sudahLogin) {
    if (role === "admin") {
        console.log("Selamat datang di halaman admin.");
    } else {
        console.log("Selamat datang di halaman pengguna.");
    }
} else {
    console.log("Silahkan login terlebih dahulu.");
}

let umurr = 20;
let punyaSIM = true;

if (umur >= 17 && punyaSIM) {
    console.log("Kamu boleh mengemudi.");
} else {
    console.log("Maaf, belum memenuhi syarat.");
}

const hari = "Minggu";

if (hari === "Sabtu" || hari === "Minggu") {
    console.log("Hari libur.");
} else {
    console.log("Hari belajar");
}

let harii = "Senin";

switch (hari) {
    case "Senin":
        console.log("Hari kerja dimulai!");
        break;
    case "Sabtu":
    case "Minggu":
        console.log("Waktu liburan!");
        break;
    default:
        console.log("Hari biasa.");
}

let angkaa = "1";

switch (angka) {
    case 1:
        console.log("Satu");
        break;
    default:
        console.log("Tidak dikenali");
}

let cuaca = "hujan";

switch (cuaca) {
    case "cerah":
    case "berawan":
        console.log("Bawa kacamata hitam.");
        break;
    case "hujan":
    case "badai":
        console.log("Bawa payung atau jas hujan.");
        break;
    default:
        console.log("Cuaca tidak diketahui.");
}

let totall = 0;

for (let angka = 1; angka <= 5; angka++) {
    total += angka;
}

console.log(total);

let percobaan = 1;

while (percobaan <= 3) {
    console.log(`Percobaan login ke-${percobaan}`);

    percobaan++;
}

let Angka = 1;

while (angka <= 5) {
    console.log(angka);

    angkaaa++;
}

let angkaaa = 6;

do {
    console.log("Cetak angka: " + angka);
    angkaaa++;
} while (angkaaa <= 5);

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}