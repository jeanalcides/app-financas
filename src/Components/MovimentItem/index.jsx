import "./style.css";

import { FaArrowUp } from "react-icons/fa";

export function MovimentItem({item}) {
  return (
    <div className="itemTable">
      <div className="iconItem">
        <FaArrowUp />
      </div>
      <div className="infoItem twoRowIem">
        <h6>{item.title}</h6>
        <p>{item.category}</p>
      </div>
      <div className="mountIten twoRowItem">
        <h5>{item.amount}</h5>
        <p>{item.payAt}</p>
      </div>
    </div>
  );
}
