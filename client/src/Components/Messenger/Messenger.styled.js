import styled from 'styled-components';
import {NavLink as RouterLink} from 'react-router-dom';

export const StyledMessenger = styled.div`
  max-width: var(--content-width);
  display: flex;
  width: 100%;
  background: #333;
  box-shadow: 0px 0px 25px rgba(0,0,0,0.5);
  height: calc(100vh - 60px);
  z-index: 0;
`;

// export const Chat = styled.div`
// position: relative;
// background-color: var(--color-dark);
// width: 50%;
// float: left;
// height: 500px;
// display: flex;
// align-items: center;
// `;



export const SendButton = styled.button`
display: inline-block;
margin-right: 5%;
width: 27px;
height: 27px;
background-color: var(--color-accent);
cursor: pointer;
border-radius: 50%;
box-shadow: 0 3px 20px rgba(0,0,0,.25),
inset 0 2px 0 rgba(255,255,255,.6),
0 2px 0 rgba(0,0,0,.1),
inset 0 0 20px rgba(0,0,0,.1);
`

export const NavLink = styled(RouterLink)`
  margin-top: 10%;
`;

export const ActiveNavLink = {
  boxShadow: '0px 3px 0 0 var(--color-accent)',
};

export const User = styled.div`
  align-items: center;
  display: flex;
`

export const Avatar = styled.img`
  border-radius: 50px; 
  height: 50px;
  width: 50px;
  margin-right: 10px;
`

export const UserInfo = styled.div`
  font-size: var(--font-size-xs);
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
`

export const Search = styled.input`
  font-size: var(--font-size-s);
  background-color: #333;
  color: white;
  line-height: 32px;
  padding: 0 10px;
  width: calc(100% - 40px);
  margin: 0 20px 20px 20px;
  border-bottom: 1px solid white;
  :focus {
    box-shadow: 0 0 10px 0 white;
  }
  :hover{
    box-shadow: 0 0 10px 0 white;
    transition: .3s;
  }
`




export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 320px;
  z-index: 1000;
  box-shadow: 5px 0 10px rgba(0,0,0,0.5);

  .sidebar-content__header{
    border-bottom: 1px solid white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    
    span{
      margin-left: 5px;
    }
    button{
      background: #333;
      cursor: pointer;
    }
    img{
      display: inline-block;
      height: 23px;
      width: 23px;
    }
  }
  .sidebar-content__search-dialog{
    font-size: var(--font-size-s);
    background-color: #333;
    color: white;
    line-height: 32px;
    padding: 0 10px;
    width: calc(100% - 40px);
    margin: 0 20px 20px 20px;
    border-bottom: 1px solid white;
    :focus {
      box-shadow: 0 0 10px 0 white;
    }
    :hover{
      box-shadow: 0 0 10px 0 white;
      transition: .3s;
    }
  }

  .sidebar-content__dialogs{
    overflow: auto;
    height: 88vh;
    .dialogs{
      .dialogs__item{
        padding: 10px 20px;
        margin-bottom: 0;
        cursor: pointer;
        :active, :hover{
          background-color: var(--color-light);
          color: black;
          box-shadow: 3px 0 5px rgba(255,255,255,.5);
        }
      }
    }
  }
`

export const Empty=styled.div`
text-align: center;

img.dialogs-empty{
  display: block;
  margin: 20% auto 0 auto;
  filter: brightness(0) invert(1);
}

i*mg.messages-empty{
  display: block;
  margin: 20% auto 0 auto;
}
`

export const Modal = styled.div`
  background: #333;
  posiyion: absolute;
  display: none;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  perspective: 500px;
  z-index: 10;
`

export const ModalWrapper = styled.div`
  height: max-content;
  width: 50%;
  max-width: 500px;
  top: 15%;
  background: #333;
  position: absolute;
  text-align: left;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.4);
  animation-name:modalopen;
  animation-duration:.8s;
  transform: rotateX(0deg);
`

export const ModalFooter = styled.div`
  text-align: center;
  background: #333;
  button{
    cursor:pointer;
    font-size:20px;
    color: black;
    background: white;
    width: 50%;
  }
  .close{
    float: right;
    border-left: 2px solid black;
  }
  .create{
    
    float:left;
  }
`

export const ModalBody = styled.div`
  text-align: center;
  background: #333;
`


export const ChatName = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid rgba(191, 202, 245, .5);
  padding: 15px;
  background-color: white;
  color: #202020;

  .chat__dialog-header-center{
    text-align: center;
    position: relative;
    display: block;
  }
  .chat__dialog-header-username{  
    display: block;
    font-weight: 500;
  }
  button{
    cursor: pointer;
    background: #fff;
    // margin-left: 2%;
  }
  input{
    width: 100%;
  }
  .button__search{

  }

`

 // .chat__searchbar{
  //   display: block;
  // }
  // .buttons__searchAndclose{
  //   width: max-content;
  //   border: 2px solid black;
  // }