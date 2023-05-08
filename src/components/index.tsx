import logoImg from '../assets/Logo.svg'
import { Container, Content } from './style'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DM Money" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}