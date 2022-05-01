import { useEffect, useState } from "react";
import "./style.css";

import { MovimentItem } from "../MovimentItem";
import { getLocalStorage } from "../../Helpers/LocalDB";

export function MovimentsTable() {

  const [moviments, setMoviments] = useState([]);

  useEffect(() => {
    setMoviments(getLocalStorage('db-mov'));

  }, [moviments]);
  return (
    <div className="boxContent">
      <p>Movimentações</p>
      <div className="movimentsTable greyBox">
        {moviments.map((item, index) => (
          <MovimentItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
