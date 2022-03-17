import fspromise from 'fs/promises';

const path = 'data.json';
export const deleteData = (param) => {
  fspromise
    .readFile(path)
    .then((data) => {
      let realData = JSON.parse(data);
      let indexDelete = realData.findIndex((item) => item.name == param);
      realData.splice(indexDelete, 1);
      return fspromise.writeFile(path, JSON.stringify(realData));
    })
    .then(() => console.log('berhasil hapus data'))
    .catch((err) => {
      console.log(err);
    });
};
