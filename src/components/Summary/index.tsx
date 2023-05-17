import { Container } from "./style";
import incomeImg from "../../assets/incomeImg.svg"
import outcomeImg from "../../assets/outcomeImg.svg"
import totalImg from "../../assets/totalImg.svg"
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary() {
  const {transactions} = useContext(TransactionsContext);

  console.log(transactions)
  return (
    <Container>
     
      {/*  Old Méthod to create context
      <TransactionsContext.Consumer>
      {(data) => {
        console.log(data)
        return <p>Vai dar Certo</p>
      } }
    </TransactionsContext.Consumer> */}
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>8900,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>-2500,00</strong>
      </div>
      <div className="highlight-background">
        <header >
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>7400,00</strong>
      </div>
    </Container>
  )
}