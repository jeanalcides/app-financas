import "./style.css";

import { MovimentItem } from "../MovimentItem";

export function MovimentsTable() {
  return (
    <div className="boxContent">
      <p>Movimentações</p>
      <div className="movimentsTable">
        <MovimentItem />
      </div>
    </div>
  );
}
