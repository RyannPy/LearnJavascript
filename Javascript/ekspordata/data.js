export const siswa = [
    { nama: "Ryan", nilai: 80 },
    { nama: "Sora", nilai: 55 },
    { nama: "Andi", nilai: 90 },
    { nama: "Budi", nilai: 70 },
    { nama: "Rina", nilai: 40 },
    { nama: "Luna", nilai: 100 }
];

export function sumBy(arr, key) {
    return arr.reduce((total, item) => total + item[key], 0);
}
