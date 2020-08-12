import React from 'react';

import {MonsterStats} from "./MonsterTracker/MonsterStats";
import {Card} from "./Card";
import cardBack from "./monster_card_back.jpg";

import DivinerIcon from "./aesther-diviner-white.svg";

import "./Deck.css";

function Stats({name, stats}) {
    if (name === "Boss") {
        return (<div className="Monsters--Deck--Stats">
            <MonsterStats className="MonsterTracker--Boss--Stats" stats={stats} />
        </div>);
    }
    return (<div className="Monsters--Deck--Stats">
        <MonsterStats stats={stats.normal} />
        <MonsterStats stats={stats.elite} elite />
    </div>);
}

export function Deck({name, level, card, active, stats, peekFutureSmallFunc, peekFutureBigFunc}) {
    return (<div className="Monsters--Deck--Container">
        {stats && <Stats name={name} stats={stats} />}
        {!card && <div className="Monsters--Deck--CardBack">
            <img src={cardBack} className="Monsters--Deck--CardBackImage" alt="card back" />
            {name !== "Boss" && <img src={DivinerIcon} className="Monster--Card--PeekFutureSmall" onClick={() =>peekFutureSmallFunc(name, 3)}></img>}
            {name !== "Boss" && <img src={DivinerIcon} className="Monster--Card--PeekFutureBig" onClick={() =>peekFutureBigFunc(name, 5)}></img>}
            <div className="Monsters--Deck--CardBackName">{name}</div>
            {!active && <div className={"Monsters--Deck--InactiveCover"}>
                Inactive
            </div>}
        </div>}
        {card && <Card name={name} card={card} stats={stats} />}
    </div>);
}
