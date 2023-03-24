import styled from 'styled-components'

export const Button = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  border-radius: 4px;
  border: 0px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
  cursor: pointer;
`
export const Container = styled.div`
  display: flex;
  background-color: #25262c;
  min-height: 100vh;
  justify-content: space-around;
  flex-wrap: wrap;
`
export const Content = styled.textarea`
  height: 100%;
  width: 100%;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
`
