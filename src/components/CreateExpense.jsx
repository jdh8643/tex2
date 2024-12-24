import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
  background: white;
  border-radius: 10px;
  padding: 15px;
  margin: 15px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  font-size: 14px;
  color: #495057;
  
  &:focus {
    outline: none;
    border-color: #40C9B0;
  }

  &::placeholder {
    color: #adb5bd;
  }
`

const SubmitButton = styled.button`
  padding: 8px 20px;
  margin-top: 19px;
  height: 37px;
  background-color: #0066FF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0052cc;
  }
`

const Label = styled.div`
  font-size: 12px;
  color: #868e96;
  margin-bottom: 4px;
  font-weight: 500;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const CreateExpense = () => {
  return (
    <FormContainer>
      <InputGroup>
        <Label>날짜</Label>
        <Input type="date" name="date" />
      </InputGroup>
      <InputGroup>
        <Label>항목</Label>
        <Input type="text" name='item' placeholder="지출 항목" />
      </InputGroup>
      <InputGroup>
        <Label>금액</Label>
        <Input type="number" name='amount' placeholder="금액" />
      </InputGroup>
      <InputGroup>
        <Label>내용</Label>
        <Input type="text" name='description' placeholder="상세 내용" />
      </InputGroup>
      <SubmitButton>저장</SubmitButton>
    </FormContainer>
  )
}

export default CreateExpense