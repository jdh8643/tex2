import React, { useEffect, useState } from 'react'
import MonthNavigation from '../components/MonthNavigation'
import CreateExpense from '../components/CreateExpense'
import ExpenseList from '../components/ExpenseList'
import { supabase } from '../utils/supabase'

const Home = () => {

    const [expenses, setExpenses] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(1);

useEffect(() => {  //가져오기
    const fetchExpenses = async ()=>{
        const {data} = await supabase 
        .from('expenses')
        .select('*')
        setExpenses(data);
    };
    fetchExpenses();
},[])

const filterExpenses = expenses.filter((expense)=>{ //걸러서 전달
    const month = new Date(expense.date).getMonth()+1;
    return month === selectedMonth;
});




  return (

    <div>
        <MonthNavigation
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        />
        <CreateExpense/>
        <ExpenseList/>
    </div>

  )
}

export default Home