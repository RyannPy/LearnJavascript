const siswa = [
    { nama: "Ryan", nilai: 80 },
    { nama: "Sora", nilai: 55 },
    { nama: "Andi", nilai: 90 },
    { nama: "Budi", nilai: 70 },
    { nama: "Rina", nilai: 40 },
    { nama: "Luna", nilai: 100 }
];

// destructuring
const [{ nama, nilai }] = siswa;
console.log(nama, nilai);

// kelulusan
function statusKelulusan(s, key, batas = 75) {
    return s.key >= batas ? "Lulus" : "Tidak Lulus";
}

console.log(statusKelulusan(s.nilai));
