import "./style.css";

import { MovimentItem } from "../MovimentItem";
import { useEffect, useState } from "react";
import { getLocalStorage } from "../../Helpers/LocalDB";

export function MovimentsTable() {
  const getData = () => JSON.parse(localStorage.getItem("db-mov"));

  const [moviments, setMoviments] = useState([]);

  useEffect(() => {
    setMoviments({
      title: "Supermercados Bergamini",
      type: "crédito à vista",
      payType: "Cartão",
      category: "Alimentação",
      amount: 91.8,
      payAt: new Date()
    });
    console.log(moviments);
  }, []);

  return (
    <div className="boxContent">
      <p>Movimentações</p>
      <div className="movimentsTable">
        {moviments.map((data) => (
          <MovimentItem data={data} />
        ))}
      </div>
    </div>
  );
}
