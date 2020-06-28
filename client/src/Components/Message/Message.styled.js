import styled from 'styled-components';




export const MsgАvatar = styled.div`
    display: flex;
    flex-direction: column-reverse;
    
    .avatar--symbol, img{
        border-radius: 50px; 
        height: 33px;
        width: 33px;            
        margin-bottom: 23px;
        font-size: var(--font-size-s);
        line-height: 31px;
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
    ${MsgАvatar}{
        .avatar--symbol, img{
            margin-right: ${(props) => (props.className === "msg--isme" ? "0" : "13px")};
            margin-left: ${(props) => (props.className === "msg--isme" ? "13px" : "0")};;
        }
    }
    ${MsgDate}{
        flex-direction: ${(props) => (props.className === "msg--isme" ? "row-reverse" : "row")};
    }
   
 }
`

export const Loader = styled.div`
{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    position: relative;
    width: 100%;
    height: 100%;

    span{
        margin-top: 100px;
        margin-left: 20px;
    }

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #333;
        border-radius: 50%;
        
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #333 transparent transparent transparent;
    }
    div:nth-child(1) {
    animation-delay: -0.45s;
    }
    div:nth-child(2) {
    animation-delay: -0.3s;
    }
    div:nth-child(3) {
    animation-delay: -0.15s;
    }
    @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
`
export const MessagesWrap = styled.div`
    padding: var(--padding);
    overflow: auto;
`

export const TextArea = styled.input.attrs({
    type: 'input',
    })`
    width: 70%;
    color: #333;
    cursor: pointer;
    left: 74%;
    `;

export const Searchfield = styled.div`
    display: flex;
    justify-content: space-evenly;
    min-height: 40px;
    padding: 5px 0px;
    border-bottom: 1px solid rgba(191, 202, 245, .5);
`

export const Button = styled.button`
    background-color: #333;
    border-radius: 10px;
    color: white;
    padding: 0px 7px;
    img{
        padding-top: 4px;
    }
`