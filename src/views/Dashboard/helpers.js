/* eslint-disable import/prefer-default-export */

export const getLatestTime = () => {
  const date = new Date();

  /* format the time */
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  const appendZeros = (val) => (val.toString().length < 2 ? `0${val}` : val);
  h = appendZeros(h);
  m = appendZeros(m);
  s = appendZeros(s);

  return `${h} : ${m} : ${s}`;
};
