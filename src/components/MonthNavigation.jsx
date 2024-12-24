import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 15px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

const MonthButton = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;

`

const MonthNavigation = ({selectedMonth, setSelectedMonth}) => {
  const months = [
    "1월", "2월", "3월", "4월", "5월", "6월",
    "7월", "8월", "9월", "10월", "11월", "12월"
  ]

  return (
    <NavigationContainer>
      {months.map((month, index) => (
        <MonthButton 
        key={month}
            className={`month-button ${month === selectedMonth ? 'active' : ''}`}
            onClick={() => setSelectedMonth(month)}>
          {month}
        </MonthButton>
      ))}
    </NavigationContainer>
  )
}

export default MonthNavigation