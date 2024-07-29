type CardList = Card[];
type Card = {
  num: string | number;
  color: CardColor;
};
type CardColor = "♥" | "♠" | "♦" | "♣";

function getAllCards(): CardList {
  const cards: CardList = [];
  for (let i = 1; i <= 13; i++) {
    const curNum =
      i == 1 ? "A" : i == 11 ? "J" : i == 12 ? "Q" : i == 13 ? "K" : i;
    const singleNumList: CardList = [
      { num: curNum, color: "♥" },
      { num: curNum, color: "♠" },
      { num: curNum, color: "♦" },
      { num: curNum, color: "♣" },
    ];
    cards.push(...singleNumList);
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
