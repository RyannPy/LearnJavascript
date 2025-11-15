const siswa = [
    { nama: "Ryan", nilai: 80 },
    { nama: "Sora", nilai: 55 },
    { nama: "Andi", nilai: 90 }
];

const [a, b, c] = siswa;

const { nama, nilai } = a;
siswa.forEach(({ nama, nilai }) => {
    console.log(`
    Nama = ${nama}
    Nilai = ${nilai} (${nilai >= 70 ? "Lulus" : "Tidak Lulus"})
`);
});
