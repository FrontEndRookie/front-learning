import { ChessType } from "../types/enums";
import { BoardComp } from "./BoardComp";
import { useState, useEffect } from "react";
import React from "react";
interface IProps {
  chesses: ChessType[];
  isGameOver: boolean;
  nextChess: ChessType;
}

export function Game() {
  const [prop, setProp] = useState<IProps>({
    chesses: [],
    isGameOver: false,
    nextChess: ChessType.black,
  });
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    let prev: IProps = {
      chesses: [],
      isGameOver: false,
      nextChess: ChessType.black,
    };
    prev.chesses = new Array(9).fill(ChessType.none);
    setProp(prev);
  };
  const onClick = (index: number) => {
    let copy = { ...prop };
    copy.chesses[index] = copy.nextChess;

    // 判断是否胜利
    judgeGameOver(copy, index);
    if (copy.nextChess === ChessType.black) {
      copy.nextChess = ChessType.red;
    } else {
      copy.nextChess = ChessType.black;
    }
    setProp(copy);
  };
  const judgeGameOver = (copy: IProps, index: number) => {
    const rowLine = Math.floor(index / 3) * 3;
    const colLine = index % 3;
    const chesses = copy.chesses;
    if (
      chesses[rowLine] &&
      chesses[rowLine] === chesses[rowLine + 1] &&
      chesses[rowLine] === chesses[rowLine + 2]
    ) {
      copy.isGameOver = true;
    } else if (
      chesses[colLine] &&
      chesses[colLine] === chesses[colLine + 3] &&
      chesses[colLine] === chesses[colLine + 6]
    ) {
      copy.isGameOver = true;
    } else if (
      (chesses[0] && chesses[0] === chesses[4] && chesses[0] === chesses[8]) ||
      (chesses[2] && chesses[2] === chesses[4] && chesses[0] === chesses[6])
    ) {
      copy.isGameOver = true;
    }
  };
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        {prop.isGameOver ? "游戏结束" : "游戏进行中"}
        --
        {!prop.isGameOver &&
          (prop.nextChess === ChessType.black ? "黑棋" : "红棋")}
        {prop.isGameOver &&
          "胜利者是" + (prop.nextChess === ChessType.black ? "红棋" : "黑棋")}
      </div>
      <BoardComp chesses={prop.chesses} onClick={onClick}></BoardComp>
    </div>
  );
}
