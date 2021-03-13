export default function timeFilter(value) {
  // let date = new Date(),
  //   hours = date.getHours(),
  //   minutes = date.getMinutes(),
  //   seconds = date.getSeconds();
  //
  // return`${hours}:${minutes}:${seconds > 9 ? "" : "0"}${seconds}`;

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  };

  return new Intl.DateTimeFormat("uk-UA", options).format(new Date(value));
}
