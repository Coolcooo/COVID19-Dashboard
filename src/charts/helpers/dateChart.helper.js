export default function dateArray(dataLength) {
  const startDay = new Date();
  const datesArr = [];
  for (let index = 0; index <= dataLength.length; index++) {
    datesArr.push(new Date(Math.round((startDay.getTime() - 8.64e7 * index))).toLocaleDateString());
  }
  return datesArr.reverse();
}
