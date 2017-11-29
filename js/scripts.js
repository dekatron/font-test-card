const sansSerifFonts = [
  'Roboto',
  'Roboto Condensed',
  'Open Sans',
  'Open Sans Condensed',
  'Source Sans Pro',
  'Lato',
  'Raleway',
  'Oswald',
  'Ubuntu'
];

const serifFonts = [
  'Roboto Slab',
  'PT Serif',
  'Lora',
  'Merriweather',
  'Source Serif Pro',
  'Faustina',
  'Domine'
];

const testText = 'The quick onyx goblin jumps over the lazy dwarf';

let fonts = sansSerifFonts.join(':400,700|') + serifFonts.join(':400,700|');
fonts = fonts.replace(' ', '+');

$(document).ready(function() {
  $('body').append(`
    <style>
      @import url('https://fonts.googleapis.com/css?family=${fonts}');
    </style>
  `);

  let styles = [];

  const $sansSerifTestCard = $('#sans-serif-card');

  $sansSerifTestCard.append('<h1>Sans Fonts</h1>');
  sansSerifFonts.forEach(function(item) {
    const className = item.replace(' ', '-');
    styles.push(`.${className} { font-family: '${item}', sans-serif; }`);
    $sansSerifTestCard.append(`
      <div class="${className}">
        <h2>${item}</h2>
        <p>${testText}</p>
        <p class="bold">${testText}</p>
        <p class="caps">${testText}</p>
        <p class="bold caps">${testText}</p>
      </div>
    `);
  });

  const $serifTestCard = $('#serif-card');
  $serifTestCard.append('<h1>Sans Serif Fonts</h1>');
  serifFonts.forEach(function(item) {
    const className = item.replace(' ', '-');
    styles.push(`.${className} { font-family: '${item}', serif; }`);
    $serifTestCard.append(`
      <div class="${className}">
        <h2>${item}</h2>
        <p>${testText}</p>
        <p class="bold">${testText}</p>
        <p class="caps">${testText}</p>
        <p class="bold caps">${testText}</p>
      </div>
    `);
  });

  styles = styles.join(' ');
  $('body').append(`<style>${styles}</style>`);

});
