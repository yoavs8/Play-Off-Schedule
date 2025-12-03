import { useEffect, useState } from "react";
import { urlMatches } from "../endpoints/common/MatchSimple";
import { endpointResultToDict } from "../services/CreateMatch";

const App: React.FC = () => {
  const [fetchedData, setFetchedData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetch(
          `http://localhost:5173/fetch/${urlMatches("2025isios")}`
        ).then((res) => res.json());

        console.log("Data from backend:", data);
        setFetchedData(data);
      } catch (err) {
        console.error("Error fetching:", err);
      }
    }
    loadData();
  }, []);

  const finalDict =
    fetchedData !== null
      ? endpointResultToDict(fetchedData, "event_key")
      : null;

  //   const [Redteam, setRedteam] = useState<alliance>({
  //     team1: "a",
  //     team2: "b",
  //     team3: "c",
  //   });
  //   const [Blueteam, setBlueteam] = useState<alliance>({
  //     team1: "d",
  //     team2: "e",
  //     team3: "f",
  //   });
  //   const [match, setmatch] = useState({
  //     currRound: 0,
  //     roundsTillPlay: 2,
  //     red: Redteam,
  //     blue: Blueteam,
  //   });
  //   const curr = Object.keys(match).map;

  console.log(fetchedData);
  return (
    <>
      <div>App loaded</div>
      <pre>{JSON.stringify(fetchedData)}</pre>
    </>
  );
};
export default App;

