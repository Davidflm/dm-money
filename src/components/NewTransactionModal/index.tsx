import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal'
import { TransactionsContext } from '../../TransactionsContext';

import { api } from '../../services/api';
import { Container, TransactionTypeContainer, RadioBox } from './style';
import close from '../../assets/close.svg'
import incomeImg from '../../assets/incomeImg.svg'
import outcomeImg from '../../assets/outcomeImg.svg'


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } =  useContext(TransactionsContext);

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type
    })
    
    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit')
    onRequestClose();

  } 

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
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
           />
        <input 
        type='number' 
        step= '0.01' 
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
         />

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

        <input 
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
         />
        <button type="submit">
          Cadastrar
        </button>
      </Container>

    </Modal>
  )
}