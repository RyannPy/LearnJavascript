const nilai = [80, 55, 90, 70, 40, 100, 65];

// UBAH NILAI >= 70 JADI STRING "LULUS": <nilai>

const lulus = nilai.filter(x => x >= 70).map(x => `LULUS : ${x} `);

console.log(lulus);

//RATA RATA
const total = nilai.reduce((total, nilai) => {
    return total + nilai;
}, 0);

const rataRata = total / nilai.length;

console.log(`Rata-rata Nilai: ${rataRata}`);
