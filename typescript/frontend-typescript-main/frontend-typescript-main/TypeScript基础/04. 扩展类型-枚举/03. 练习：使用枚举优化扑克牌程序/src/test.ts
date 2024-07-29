type CardList = Card[];
type Card = {
  num: string | number;
  color: CardColor;
};
enum CardColor {
  heart = "♥",
  spade = "♠",
  diamond = "♦",
  club = "♣",
}

enum CardNum {
  A = "A",
  two = "2",
  three = "3",
  four = "4",
  five = "5",
  six = "6",
  seven = "7",
  eight = "8",
  nine = "9",
  ten = "10",
  joker = "J",
  queen = "Q",
  king = "K",
}
function getAllCards(): CardList {
  const cards: CardList = [];
  const colors = Object.values(CardColor);
  const nums = Object.values(CardNum);
  for (let j of nums) {
    for (let i of colors) {
      cards.push({
        num: j,
        color: i,
      });
    }
  }
  return cards;
}

function printAllCards(cardList: CardList): void {
  let str: string = "";
  cardList.forEach((card, index) => {
    str += `${card.num}${card.color}\t`;
    if ((index + 1) % 4 == 0) {
      str += "\n";
    }
  });
  console.log(str);
}
printAllCards(getAllCards());
