Feature('Homepage');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.see('Hello, World!');
  I.moveCursorTo('#app-2');
  I.seeNumberOfElements('[title^="You loaded this page on "]', 1);
  I.see('Now you see me');
  I.see('Learn JavaScript');
  I.see('Learn Vue');
  I.see('Build something awesome');
});

Scenario('test a second scenario', (I) => {
  I.amOnPage('/');
  I.see('Hello Vue!');
  I.click('Reverse Message');
  I.see('!euV olleH');
  I.click('Reverse Message');
  I.see('Hello Vue!');
});

Scenario('type in input', (I) => {
  I.amOnPage('/');
  I.seeTextEquals('Type here!', '#app-6 p');
  I.seeInField('#app-6 input', 'Type here!');
  I.fillField('#app-6 input', 'Changed the text!');
  I.seeTextEquals('Changed the text!', '#app-6 p');
});

Scenario('Shopping list', (I) => {
  I.amOnPage('/');
  I.see('Vegetables');
  I.see('Cheese');
  I.see('Whatever else humans are supposed to eat');
});

Scenario('computed example', (I) => {
  I.amOnPage('/');
  I.see('Hello');
  I.see('olleH');
});
