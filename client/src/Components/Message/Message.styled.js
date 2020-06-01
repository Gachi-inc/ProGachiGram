import styled from 'styled-components';




export const Аvatar = styled.div`
    display: flex;
    flex-direction: column-reverse;
    
    img{
        border-radius: 50px; 
        height: 33px;
        width: 33px;            
        margin-bottom: 23px;
    }
`

export const Bubble = styled.div`

    box-shadow: 0px 5px 5px rgba(51, 51, 51, 0.196733);
    padding: 15px;
`

export const Text = styled.p`
    line-height: 20px;
`

export const MsgDate = styled.span`
    display: flex;
    opacity: 0.5;
    font-size: 12px;
`

export const Msg = styled.div`
 display: flex;
 flex-direction: ${(props) => (props.className === "msg--isme" ? "row-reverse" : "")};
 max-width: 440px;
 margin-bottom: 15px;
 margin-left: ${(props) => (props.className === "msg--isme" ? "auto" : "unset")};
    ${Bubble}{
        background: ${(props) => (props.className === "msg--isme" ? "#ffffff" : "#333")};
        border: ${(props) => (props.className === "msg--isme" ? "#ececec" : "")};
        border-radius: ${(props) => (props.className === "msg--isme" ? "12px 12px 0px 12px" : "12px 12px 12px 0px")};
    };
    ${Text}{
        color: ${(props) => (props.className === "msg--isme" ? "#202020" : "#fff")};
    }
    ${Аvatar}{
        img{
            margin-right: ${(props) => (props.className === "msg--isme" ? "0" : "13px")};
            margin-left: ${(props) => (props.className === "msg--isme" ? "13px" : "0")};;
        }
    }
    ${MsgDate}{
        flex-direction: ${(props) => (props.className === "msg--isme" ? "row-reverse" : "row")};
    }
   
 }
`

