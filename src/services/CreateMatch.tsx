import { useEffect, useRef, useState } from "react";
import * as t from "io-ts";
import * as D from "io-ts/Decoder";
import { pipe } from "fp-ts/function";
import { fold } from "fp-ts/Either";

const alliance = t.type({
  team1: t.string,
  team2: t.string,
  team3: t.string,
});
const match = t.type({
  currRound: t.number,
  roundsTillPlay: t.number,
  red: alliance,
  blue: alliance,
});

type matchType = typeof match._A;
type AllianceType = typeof alliance._A;

const convert = (json: any) => {
  const newFile = {
    currRound: json.CurrRound,
    roundsTillPlay: json.tillPlay,
    red: json.redTeam,
    blue: json.blueTeam,
  } satisfies matchType;
  return newFile;
};
const createMatch: React.FC = () => {
  const [roundsTill, setroundsTill] = useState<number>();
  const [Redteam, setRedteam] = useState<AllianceType>({
    team1: "a",
    team2: "b",
    team3: "c",
  });
  const [Blueteam, setBlueteam] = useState<AllianceType>({
    team1: "d",
    team2: "e",
    team3: "f",
  });
  const [match, setmatch] = useState({
    currRound: 0,
    roundsTillPlay: roundsTill,
    red: Redteam,
    blue: Blueteam,
  });
  const curr = Object.entries(Redteam);
  return (
    <>
      <h1>
        rounds Till the game: {roundsTill}
        <br></br>
        {curr.map(([key, value]) => {
          console.log(key);
          console.log(value);
          return (
            <>
              {key}: {value}
              {"\n"}
              <br></br>
            </>
          );
        })}
      </h1>
    </>
  );
};
export default createMatch;
