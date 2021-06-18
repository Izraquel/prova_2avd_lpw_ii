import styled from 'styled-components'

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 100%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  table td {
    padding-bottom: 10px;
    margin-left: 115px;
  }
  table tr {
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
  }
  table th {
    padding-top: 25px;
  }

`
export const Button = styled.button`
  background-color: #4722bf;
  color: white;

  height: 42px;
  width: 150px;
  border: none;
  border-radius: 8px;
`
export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  width: 100%;
  max-width: 40%;
  margin: 30px auto 0;
  padding: 20px;
  background: #fff;
  border: 2px solid #ddd;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`
