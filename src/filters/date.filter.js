// eslint-disable-next-line no-unused-vars
export default function dateFilter(value) {
  // let date = new Date(),
  //   fullYear = date.getFullYear(),
  //   month = date.getMonth() + 1,
  //   day = date.getDate();
  //
  // return `${day}.${month}.${fullYear}`;

  const options = {
    day: "2-digit",
    month: "long",
    year: "numeric"
  };

  return new Intl.DateTimeFormat('uk-UA', options).format(new Date(value));
}