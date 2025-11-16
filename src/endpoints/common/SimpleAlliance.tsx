import * as t from "io-ts";
export const SimpleAlliance = t.type({//
  dq_team_keys: t.array(t.string),
  score: t.number,
  surrogate_team_keys: t.array(t.string),
  team_keys: t.array(t.string),
});
type SimpleAllianceType = typeof SimpleAlliance._A;
