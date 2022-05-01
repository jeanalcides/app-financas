import { FaPlus } from "react-icons/fa";
import "./style.css";
import "../../Helpers/LocalDB";
import { getLocalStorage, setLocalStorage } from "../../Helpers/LocalDB";

const item =
{
  title: "Supermercados Bergamini",
  type: "crédito à vista",
  payType: "Cartão",
  category: "Alimentação",
  amount: 91.8,
  payAt: new Date()
};

function handleAddMoviment() {
  const data = getLocalStorage('db-mov');
  const newItem = [...data, item]
  setLocalStorage("db-mov", newItem);
  console.log(data)
}

export function PlusButton() {


  return (
    <button className="plusButton" onClick={handleAddMoviment}>
      <FaPlus />
    </button>
  );
}
