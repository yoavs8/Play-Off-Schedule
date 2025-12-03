interface alliance {
  team1: string;
  team2: string;
  team3: string;
}

interface match {
  currRound: number;
  roundsTillPlay: number;
  red: alliance;
  blue: alliance;
}
type TranslateValue<
  Value extends object,
  Key extends keyof Value = keyof Value
> = Value[Key] extends string | number ? Key : never;

export const endpointResultToDict = <Value extends object>(
  values: Value[],
  idKey: TranslateValue<Value>
) => {
  return values.reduce(
    (acc, value) => ({
      ...acc,
      [value[idKey] as string]: value,
    }),
    {}
  );
};
