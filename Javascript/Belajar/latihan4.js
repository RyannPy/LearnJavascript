const nama = ["Ryan", "Sora", "Andi", "Budi", "Rina"];

nama.push("Zetanhi", "Adagaki");
console.log(
    `Nama pertama : ${nama[0]} dan Nama terakhir : ${nama[nama.length - 1]}`
);

const nama4word = nama.filter(x => x.length > 4).map(x => x.toUpperCase());
console.log(nama4word);
