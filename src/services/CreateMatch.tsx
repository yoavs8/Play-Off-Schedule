import { useEffect, useRef, useState } from "react";
import * as t from "io-ts";
import { urlMatches } from "../endpoints/common/MatchSimple";
import { response } from "express";

const now: Date = new Date();

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

const apiKey = "YOUR_API_KEY";
//const apiKey = "JSU19uyptEfTjmhbQtYMbmXoOjc60kydzpePFk3m7QRKKbBUadASpkDHO6cpwuGk";

export const fetchData = (url: string) => {
  return fetch(url, {
    method: "GET",
    headers: {
      "X-TBA-Auth-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => console.error("Error:", error));
};

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


