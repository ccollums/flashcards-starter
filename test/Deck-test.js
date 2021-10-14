const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');

describe('Deck', function() {

  let deck;
  let card1;
  let card2;
  let card3;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store the instances of card', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to count the number of cards in the deck', function() {
    deck.countCards();
    expect(deck.countCards()).to.equal(3);
  });

});
