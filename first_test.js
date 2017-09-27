
Feature('First');

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
