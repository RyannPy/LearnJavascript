const siswa = [
    { nama: "Ryan", nilai: 80 },
    { nama: "Sora", nilai: 55 },
    { nama: "Andi", nilai: 90 },
    { nama: "Budi", nilai: 70 },
    { nama: "Rina", nilai: 40 },
    { nama: "Luna", nilai: 100 }
];

// 1. Tampilkan semua nama siswa dalam array baru
console.log(siswa.map(s => s.nama));

// 2. Buat array siswa yang lulus (nilai >= 70)
// 3. Ambil hanya nama siswa yang lulus.
const siswaLulus = siswa.filter(s => s.nilai >= 70).map(s => s.nama);
console.log(siswaLulus);

// 4. Hitung rata-rata nilai semua siswa.
const total = siswa.reduce((total, s) => total + s.nilai, 0);
const rataRata = total / siswa.length;
console.log("Rata-rata: " + rataRata);

// 5. Cari siswa dengan nilai tertinggi.
const tertinggi = siswa.reduce((max, s) => (s.nilai > max.nilai ? s : max));
console.log(tertinggi);

// 6. Urutkan berdasarkan rangking.
const ranking = [...siswa].sort((a, b) => b.nilai - a.nilai);
ranking.forEach((s, i) => {
    console.log(`${i + 1}. ${s.nama} = ${s.nilai}`);
});
