import "./style.css";

import { FiArrowUp } from 'react-icons/fi';

export function MovimentItem({ item }) {
  return (
    <div className="itemTable">
      <div className="iconItem">
        <FiArrowUp />
      </div>
      <div className="infoItem twoRowItem">
        <h6>{item.title}</h6>
        <p>{item.category}</p>
      </div>
      <div className="mountIten twoRowItem">
        <h3>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(item.amount)
          }</h3>
        <p>
          {new Intl.DateTimeFormat('pt-BR').format(new Date(item.payAt))}</p>
      </div>
    </div>
  );
}
