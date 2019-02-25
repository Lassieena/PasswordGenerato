'use strict';

const slider = document.getElementById('slider');
const label = document.getElementById('label');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');

function getPassword() {
  const seed_letters = 'abcdefghijklmnopqrstuvwxyz';
  const seed_numbers = '0123456789';
  const seed_symbols = '!?#$%&()*¥<>';
  let seed;

  const len = slider.value;
  let pwd = '';

  seed = seed_letters + seed_letters.toUpperCase();
  if (numbers.checked === true) seed += seed_numbers;
  if (symbols.checked === true) seed += seed_symbols;

  for(let i = 0; i < len; i++) {
    pwd += seed[Math.floor(Math.random() * seed.length)];
  }

  result.value = pwd;
}






slider.addEventListener('change', () => {
  label.textContent = slider.value;
});

btn.addEventListener('click', () => {
  getPassword();
});

result.addEventListener('click', () => {
  result.select();
});

getPassword();
