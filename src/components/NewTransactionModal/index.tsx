import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './style';
import close from '../../assets/close.svg'
import incomeImg from '../../assets/incomeImg.svg'
import outcomeImg from '../../assets/outcomeImg.svg'
import { useState } from 'react';


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');

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
          <RadioBox
            type='button'
            onClick={() => setType('deposit')}
            isActive={type =='deposit'}
            activeColor='green'
          >
           <img src={incomeImg} alt='Entradas'/>
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type='button'
            onClick={() => setType('withdraw')}
            isActive= {type =='withdraw'}
            activeColor='red'
          >
            <img src={outcomeImg} alt='Saídas' />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input placeholder='Categoria' />
        <button type="submit">
          Cadastrar
        </button>
      </Container>

    </Modal>
  )
}