import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const ExpenseItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #f1f3f5;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`

const Date = styled.div`
  color: #868e96;
  font-size: 14px;
  width: 100px;
`

const Content = styled.div`
  flex: 1;
  margin: 0 20px;
`

const Title = styled.div`
  font-size: 15px;
  color: #495057;
  margin-bottom: 4px;
  font-weight: 500;
`

const Description = styled.div`
  font-size: 13px;
  color: #868e96;
`

const Amount = styled.div`
  font-size: 15px;
  color: #0066FF;
  font-weight: 600;
  text-align: right;
  width: 120px;
`

const ExpenseList = () => {
  const dummyData = [
    {
      date: "2024-12-24",
      title: "짜장면",
      description: "회식",
      amount: "3,000"
    }
  ];

  return (
    <ListContainer>
      {dummyData.map((item, index) => (
        <ExpenseItem key={index}>
          <Date>{item.date.replace(/-/g, '.')}</Date>
          <Content>
            <Title>{item.title}</Title>
            {item.description && <Description>{item.description}</Description>}
          </Content>
          <Amount>{item.amount}원</Amount>
        </ExpenseItem>
      ))}
    </ListContainer>
  );
};

export default ExpenseList;
