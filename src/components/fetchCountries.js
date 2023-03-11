export function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/';
  const URL = `${BASE_URL}name/${name}?fields=name,capital,population,flags,languages`;
  if (name) {
    return fetch(URL).then(response => {
      return response.json();
    });
  }

  // .then(data => {
  //   if (data.length > 5) {
  //     throw new Error(
  //       Notiflix.Notify.info(
  //         'Too many matches found. Please enter a more specific name.'
  //       )
  //     );
  //   } else if ((data.length >= 2) & (data.length <= 10)) {
  //     insertContent(data);
  //   } else if (data.length === 1) {
  //     insertDescription(data);

  //     console.log('🔥 Країна знайдена!!!');
  //   } else if (data.status === 404) {
  //     throw new Error(
  //       Notiflix.Notify.failure('Oops, there is no country with that name')
  //     );
  //   }
  // })
  // .catch(error => {});
}
