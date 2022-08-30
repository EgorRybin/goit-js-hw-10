import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from '../src/js/fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

input.addEventListener(
  'input',
  debounce(event => onInput(event), DEBOUNCE_DELAY)
);

function onInput(evt) {
  if (evt.target.value.length > 0) {
    fetchCountries(evt.target.value.trim())
      .then(data => {
        const markupOverOne = data
          .map(
            ({
              flag,
              name,
            }) => `<li style="font-size: 20px; display: flex; align-items: center;">
        <img style="margin-right: 10px; margin-bottom: 10px" src="${flag}" alt="sss" width="50" height="50"> Name: ${name}</li>`
          )
          .join('');

        const markupOne = data
          .map(
            ({
              capital,
              flag,
              name,
              languages,
              population,
            }) => `<p style="display: flex; align-items: center;"><img style="margin-right: 10px;" src="${flag}" alt="sss" width="40" height="40">Name: ${name}</p>
<p>Capital: ${capital}</p>
<p>Population: ${population}</p>
<p>Languages: ${languages.map(({ name }) => name).join(', ')}</p>`
          )
          .join('');
        if (data.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
          clearInput();
        } else if (data.length > 1 && data.length <= 10) {
          div.innerHTML = '';
          ul.innerHTML = markupOverOne;
        } else if ((data.length = 1)) {
          ul.innerHTML = '';
          div.innerHTML = markupOne;
        }
      })
      .catch(error => {
        clearInput();
      });
  }
}

function clearInput() {
  ul.innerHTML = '';
  div.innerHTML = '';
}
