import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './style';
import close from '../../assets/close.svg'
import incomeImg from '../../assets/incomeImg.svg'
import outcomeImg from '../../assets/outcomeImg.svg'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type='button'
        onClick={onRequestClose}
        className='react-modal-close'
      >
        <img src={close} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Cadastrar Transação</h2>

        <input placeholder='Título' />
        <input type='number' placeholder='Valor' />

        <TransactionTypeContainer>
          <button
            type='button'
          >
           <img src={incomeImg} alt='Entradas'/>
            <span>Entrada</span>
          </button>
          <button
            type='button'
          >
            <img src={outcomeImg} alt='Saídas' />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder='Categoria' />
        <button type="submit">
          Cadastrar
        </button>
      </Container>

    </Modal>
  )
}