import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { supabase } from "../utils/supabase";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
    text-align: left;
  }

  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.danger ? "#ff4d4d" : "#007bff")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.danger ? "#cc0000" : "#0056b3")};
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeItem = (e) => {
    setItem(e.target.value);
  };
  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    const fetchExpense = async () => {
      const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .eq("id", id);

      if (error) {
        alert("데이터를 불러오는 중 오류가 발생했습니다.");
        return;
      }
      setDate(data[0].date);
      setItem(data[0].item);
      setAmount(data[0].amount);
      setDescription(data[0].description);
    };
    fetchExpense();
  }, []);

  const onEdit = async () => {
    // date가 유효한지
    // item에 글을 작성을 잘했는지....
    if (!date || !item || !amount || !description) {
      alert("모든 항목을 완성해주세요~!");
      return;
    }
    // 미리 체크 후 데이터 보내자
    const dateReg = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateReg.test(date)) {
      alert("날짜 형식이 올바르지 않습니다~!");
      return;
    }
    const { data, error } = await supabase
      .from("expenses")
      .update({
        date: date,
        item: item,
        amount: amount,
        description: description,
      })
      .eq("id", id);
    if (error) {
      alert("데이터를 수정하는 중 오류가 발생했습니다.");
    }
    alert("데이터를 수정하었습니다.");
    navigate("/");
  };

  const onDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const { date, error } = await supabase
        .from("expenses")
        .delete()
        .eq("id", id);
      if (error) {
        alert("데이터를 삭제하는 중 오류가 발생했습니다.");
      }
      alert("데이터를 삭제하었습니다.");
      navigate("/");
    }
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="date">날짜</label>
        <input
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          value={date}
          onChange={onChangeDate}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="item">항목</label>
        <input
          type="text"
          id="item"
          placeholder="지출 항목"
          value={item}
          onChange={onChangeItem}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          placeholder="지출 금액"
          value={amount}
          onChange={onChangeAmount}
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="description">내용</label>
        <input
          type="text"
          id="description"
          placeholder="지출 내용"
          value={description}
          onChange={onChangeDescription}
        />
      </InputGroup>
      <ButtonGroup>
        <Button onClick={onEdit}>수정</Button>
        <Button danger="true" onClick={onDelete}>삭제</Button>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </ButtonGroup>
    </Container>
  );
}
