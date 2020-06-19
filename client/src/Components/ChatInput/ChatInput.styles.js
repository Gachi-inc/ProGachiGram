import styled from "styled-components";


export const MsgField = styled.input`
padding-left: 5%;
height: 30px;
width: 84%;
border-radius: 10px;
`; 

export const ExportMsgField = styled.div`
width: 100%;
height: 80px;
position: relative;
align-items: center;
display: flex;
justify-content: space-between;
background-color: #333;
padding: var(--padding);

button.smileButton{
  height: 21px;
  position: absolute;
  left: 37px;
  top: 30px;
  
  cursor: pointer;
  background: #fff;
}

button.smileButton + ${MsgField}{
  padding-left: 4px;
}


button.sendButton{
  height: 21px;
  cursor: pointer;
  background: #333;
}

`