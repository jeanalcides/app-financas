import "./styles.css";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronDown,
  FaChevronUp,
  FaEllipsisH,
  FaRegEye,
  FaUser
} from "react-icons/fa";

export function Header() {
  return (
    <header className="header">
      <div className="headerTop">
        <div className="leftHeader">
          <FaUser />
        </div>
        <div className="middleHeader">
          <button>
            <FaAngleLeft />
          </button>
          <p>Maio</p>
          <button>
            <FaAngleRight />
          </button>
        </div>
        <div className="rightHeader">
          <FaEllipsisH />
        </div>
      </div>

      <div className="headerBody">
        <p>Saldo atual em contas</p>
        <h1>R$ 5.647,00</h1>
        <FaRegEye className="iconHeader" />
      </div>

      <div className="summaryHeader">
        <div className="leftSummary">
          <div className="boxIconLeft boxIconSummary">
            <FaChevronUp />
          </div>
          <div className="contentSummary leftBoxSummary">
            <p>Receitas</p>
            <h3>R$ 6.547,00</h3>
          </div>
        </div>
        <div className="rightSummary">
          <div className="boxIconRight  boxIconSummary">
            <FaChevronDown />
          </div>
          <div className="contentSummary rightBoxSummary">
            <p>Despesas</p>
            <h3>R$ 6.547,00</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
