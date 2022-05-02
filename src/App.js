import { Header } from "./Components/Header";

import "./styles.css";
import { ChartContainer } from "./Components/ChartBox/";
import { PlusButton } from "./Components/PlusButton";
import { MovimentsTable } from "./Components/MovimentsTable";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement('#root');

export default function App() {
  const [newTransactionModal, setNewTransactionModal] = useState(false);

  function handleOpenTransactionModal() {
    setNewTransactionModal(true)
  }

  function handleCloseTransactionModal() {
    setNewTransactionModal(false)
  }

  return (
    <>
      <Header />

      <ChartContainer />

      <MovimentsTable />

      <PlusButton onOpenNewTransactionModal={handleOpenTransactionModal}/>

      <Modal
        isOpen={newTransactionModal}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Teste</h2>
      </Modal>
    </>
  );
}
