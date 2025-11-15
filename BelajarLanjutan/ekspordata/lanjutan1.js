import { siswa } from "./data.js";
import { sumBy } from "./data.js";

// siswa
console.log(siswa);

// rata-rata
const total = sumBy(siswa, "nilai");
console.log(`Rata-rata = ${total / siswa.length}`);

// tambah objek status
const siswaPlus = siswa.map(s => ({
    ...s,
    status: s.nilai >= 75 ? "Lulus" : "Tidak Lulus"
}));

// tampilkan
siswaPlus.forEach((s, i) => {
    console.log(`${i}. ${s.nama} | ${s.nilai} | ${s.status}`);
});
