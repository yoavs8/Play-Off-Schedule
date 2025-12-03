import * as t from "io-ts";
import { SimpleAlliance } from "./SimpleAlliance";
import { numberOrNull } from "../../utils/TypeUtils";

export const MatchSimple = t.type({//did
  actual_time:numberOrNull ,
  alliances: t.type({
    blue: SimpleAlliance,
    red: SimpleAlliance,
  }),
  comp_level: t.string,
  event_key: t.string,
  key: t.string,
  match_number: t.number,
  predicted_time: numberOrNull,
  set_number: t.number,
  time: numberOrNull,
  winning_alliance: t.string,
});
export type MatchesSimpleType = typeof MatchSimple._A;


export const urlMatches = (event_key:string)=> `https://www.thebluealliance.com/api/v3/event/${event_key}/matches/simple`;

