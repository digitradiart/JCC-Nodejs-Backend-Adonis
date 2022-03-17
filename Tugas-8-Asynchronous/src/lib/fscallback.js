import fs from 'fs';

export default () => {
  fs.readFile('data.json', (err, data) => {
    if (err) console.log(err);
    console.log(JSON.parse(data));
  });
};
