import "./style.css";

import { FaArrowUp } from "react-icons/fa";

export function MovimentItem(props) {
  return (
    <div className="itemTable">
      <div className="iconItem">
        <FaArrowUp />
      </div>
      <div className="infoItem twoRowIem">
        <h6>Movimentações</h6>
        <p>Descição da movimentação</p>
      </div>
      <div className="mountIten twoRowItem">
        <h5>R$ 99,80</h5>
        <p>30/04/2022</p>
      </div>
    </div>
  );
}
