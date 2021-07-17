import style from "./Style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Card from "./Components/Card";
import People from "./Components/list";
import { useState } from "react";

function App() {
  let [people, setPeople] = useState(People);
  return (
    <>
      <Card people={people} setState={setPeople} />
    </>
  );
}

export default App;
