// gabungkan semua fungsi dalam satu file functions.js
export const sapa = (nama) => `Halo! Selamat pagi, ${nama}.`;
export const convert = (nama, domisili, umur) => {
  return { nama, domisili, umur };
};

export const filterData = (inputArr) => {
  const data = [
    { name: 'Ahmad', class: 'adonis' },
    { name: 'Regi', class: 'laravel' },
    { name: 'Bondra', class: 'adonis' },
    { name: 'Iqbal', class: 'vuejs' },
    { name: 'Putri', class: 'Laravel' },
  ];

  return data.filter((a) => {
    return a.class.toLowerCase() === inputArr.toLowerCase();
  });
};

export const checkScore = (str) => {
  const nama = str.split(',')[0].split(':')[1];
  const kelas = str.split(',')[1].split(':')[1];
  const skor = str.split(',')[2].split(':')[1];

  return { name: nama, class: kelas, score: skor };
};
