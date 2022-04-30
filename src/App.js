import { Header } from "./Components/Header";

import "./styles.css";
import { ChartContainer } from "./Components/ChartBox/";
import { PlusButton } from "./Components/PlusButton";
import { MovimentsTable } from "./Components/MovimentsTable";

export default function App() {
  return (
    <>
      <Header />

      <ChartContainer />

      <MovimentsTable />

      <PlusButton />
    </>
  );
}
