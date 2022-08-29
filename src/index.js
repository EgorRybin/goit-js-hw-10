import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from '../src/js/fetchCountries';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const ul = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

input.addEventListener('input', onInput);

function onInput(evt) {
  console.log(fetchCountries(evt.target.value));
}
