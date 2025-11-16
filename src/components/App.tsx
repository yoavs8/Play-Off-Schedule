import { urlMatches } from "../endpoints/common/MatchSimple";
import { endpointResultToDict, fetchData } from "../services/CreateMatch";
const a = endpointResultToDict(await fetchData(urlMatches("2025isios")), "event_key");
const b = await fetchData(urlMatches("2025isios"));
const App: React.FC = () => {
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

    console.log(b);    
  return (
    <>
     
    </>
  );
};
export default App;
