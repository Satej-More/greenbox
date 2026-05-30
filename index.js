// import jsonfile from "jsonfile";
// import moment from "moment";
// import simpleGit from "simple-git";

// const path = "./data.json";

// const markCommit = () => {

//   // Day before yesterday
//   const date = moment()
//     .subtract(2, "days")
//     .format();

//   const data = {
//     date: date,
//     random: Math.random(),
//   };

//   console.log(date);

//   jsonfile.writeFile(path, data, () => {
//     simpleGit()
//       .add([path])
//       .commit(date, { "--date": date })
//       .push();
//   });
// };

// for (let i = 0; i < 1; i++) {
//   markCommit();
// }

import jsonfile from "jsonfile";
import simpleGit from "simple-git";

const path = "./data.json";
const date = "2026-05-30T12:00:00";

const data = {
  date: date,
};

jsonfile.writeFileSync(path, data);

simpleGit()
  .add([path])
  .commit(`Commit for ${date}`, { "--date": date })
  .push();