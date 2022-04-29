import React, { useState } from 'react';
import styled from 'styled-components';
import SubHeader from '../components/Header/SubHeader';
import FormItem from '../components/FormItem/FormItem';
import { useParams, useNavigate} from "react-router-dom";
import Button from '../components/Button/Button';
import { ItemsContext } from '../Context/ItemsContextProvider';


const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

const Form = () => {
  const { addItemRequest } = React.useContext(ItemsContext);
  const navigate = useNavigate();
  let params = useParams();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleOnSubmit = e => {
    e.preventDefault();
    addItemRequest({
      title,
      quantity,
      price,
      id: Math.floor(Math.random() * 100),
      listId: parseInt(params.id)
    });
    navigate(-1);
  };


  return (
    <>
      <SubHeader goBack={() => navigate(-1)} title={`Add Item`} />
      <FormWrapper>
        <form onSubmit={handleOnSubmit}>
          <FormItem id='title' label='Title' placeholder='Insert title' value={title} handleOnChange={setTitle} />
          <FormItem
            id='quantity'
            label='Quantity'
            type='number'
            placeholder='0'
            value={quantity}
            handleOnChange={setQuantity}
          />
          <FormItem id='price' label='Price' type='number' placeholder='0.00' value={price} handleOnChange={setPrice} />
          <SubmitButton>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  )
}

export default Form;
