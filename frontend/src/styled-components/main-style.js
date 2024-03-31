import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #eredfd;
`;

export const AppContainer = styled.div`
  border-radius: 15px;
  background: #e9e9e9;
  box-shadow: 14px 14px 21px #c6c6c6, -14px -14px 21px #ffffff, inset -3px -3px 3px rgba(0, 0, 0, 0.13), inset 3px 3px 3px rgba(255, 255, 255, 0.13);
  height: 600px;
  width: 350px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleInput = styled.input`
  width: 100px;
  margin-top: 10px;
  border-radius: 4px;
  border: 0px;
`;

export const DescriptionTextarea = styled.textarea`
  width: 98%;
  margin: 10px;
  resize: none;
  border-radius: 10px;
  border: 0px;
`;

export const AddButton = styled.button`
  margin-top: 10px;
`;

