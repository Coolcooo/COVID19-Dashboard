export default function dateArray(dataLength) {
  const startDay = new Date();
  const datesArr = [];
  // console.log(new Date(Math.round((startDay.getTime() - 8.64e7*5))));
  // console.log(startDay.getTime() - 8.64e7*5);
  // console.log(startDay.getTime());
  // console.log(8.64e7*5);
  // console.log(endDay);
  // console.log(dataLength.length);

  for (let index = 0; index < dataLength.length; index++) {
    datesArr.push(new Date(Math.round((startDay.getTime() - 8.64e7 * index))).toLocaleDateString());
  }
  return datesArr.reverse();
}
