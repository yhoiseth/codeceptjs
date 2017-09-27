
Feature('First');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.see('Hello, World!');
    I.moveCursorTo('#app-2');
    I.seeNumberOfElements('[title^="You loaded this page on "]', 1);
});
