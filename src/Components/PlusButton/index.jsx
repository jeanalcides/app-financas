import { FaPlus } from "react-icons/fa";
import "./style.css";
import "../../Helpers/LocalDB";
import { setLocalStorage } from "../../Helpers/LocalDB";

const data = [
  {
    title: "Supermercados Bergamini",
    type: "crédito à vista",
    payType: "Cartão",
    category: "Alimentação",
    amount: 91.8,
    payAt: new Date()
  }
];

export function PlusButton() {
  function handleAddMoviment() {
    setLocalStorage("db-mov", data);
  }

  return (
    <button className="plusButton" onClick={handleAddMoviment}>
      <FaPlus />
    </button>
  );
}
