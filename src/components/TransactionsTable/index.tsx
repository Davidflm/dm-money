import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de um WebSite</td>
            <td className="deposit">2.500</td>
            <td>Desenvolvimento</td>
            <td>10/05/23</td>
          </tr>
          <tr>
            <td>Desenvolvimento de um Aplicativo Mobile</td>
            <td className="deposit">2.500</td>
            <td>Desenvolvimento</td>
            <td>10/05/23</td>
          </tr>
          <tr>
            <td>Parcela</td>
            <td className="withdraw">-2.500</td>
            <td>Casa</td>
            <td>10/05/23</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}