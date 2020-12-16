export default function api(method = 'summary', countryName = 'Russia') {
  let obj;
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  fetch(`https://api.covid19api.com/${method}?from=2020-01-01`, requestOptions)
    .then((response) => response.json())
    .then((result) => obj = result)
    .catch((error) => console.log('error', error));

    console.log(obj.sort((a, b) => a.TotalDeaths < b.TotalDeaths));
}

