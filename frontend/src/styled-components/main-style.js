import styled from 'styled-components';



export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 98vh;
  background-color: #eredfd;
`;

export const GroupItem = styled.div`
  border-radius: 14px;
  background: #4E937A;
  margin: 10px;
`;

export const AppContainer = styled.div`
  border-radius: 15px;
  background: #e9e9e9;
  box-shadow: 14px 14px 21px #c6c6c6, -14px -14px 21px #ffffff, inset -3px -3px 3px rgba(0, 0, 0, 0.13), inset 3px 3px 3px rgba(255, 255, 255, 0.13);
  height: 600px;
  width: 350px;
  overflow-y: hidden;
  transition: overflow 0.3s ease;
  
  &:hover {
    overflow-y: auto; 
  }
  ::-webkit-scrollbar {
    width: 10px; 
  }
`;


export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleInput = styled.input`
  width: 90px;
  margin-top: 10px;
  border-radius: 4px;
  border: 0px;
  background:#4E937A;
  outline: none;
  font-weight: bold;
  font-size:15px;
  color: #e9e9e9;

`;

export const DescriptionTextarea = styled.textarea`
  width: 95%;
  margin: 10px;
  resize: none;
  border-radius: 10px;
  border: 0px;
  background:#4E937A;
  outline: none;
  color: #e9e9e9;
  word-wrap: break-word;
  
`;

export const AddButton = styled.button`
  align-self: flex-end;
  margin: 10px;
  border: 0px;
  border-radius: 5px;
  background: #B4656F;
  cursor: pointer;
  padding: 10px;
  color: #e9e9e9;
  font-weight:bold;

  &:hover {
    color: #ffffff;
  }

`;

export const IndvTask = styled.div`
  border: 0px;
  margin: 10px;
  background: #4E937A;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  min-height:130px;
  color:#e9e9e9;
`;

export const IndvBtn = styled.button`
align-self: flex-end;
margin: 2px;
border: 0px;
border-radius: 5px;
background: #B4656F;
cursor: pointer;
padding: 6px;
color: #e9e9e9;
font-weight:bold; 
font-size:14px;
&:hover {
  color: #ffffff;
}
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

