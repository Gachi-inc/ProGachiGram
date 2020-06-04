import styled from 'styled-components';


 

export const DlgItmInfo = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;   
    flex: 1;
`
export const DlgItmInfo__top = styled.div`
    display: flex;
    margin-bottom: 5px;
    b{
        font-weight: 500;
        font-size: 14px;
        flex: 1;
    }
    span{
        font-size: 14px;
        opacity: 0.5;
    }
`
export const DlgItmInfo__bottom = styled.div`
        position: relative;
        p{
            white-space: nowrap;
            width: 200px;
            opacity: 0.5;
            font-size: 14px;
            overflow-x: hidden;
            text-overflow: ellipsis;
            
        }  
        
        div.dlgitminfo__bottom--counter{
            position: absolute;
            right: 0;
            bottom: 0;
            background: #f46b6b;
            color: #fff;
            font-weight: bolt;
            min-width: 18px;
            max-width: 22px;
            width: 100%;
            height: 18px;
            border-radius: 30px;
            font-size: 10px;
            text-align: center;
            line-height: 17px;
            box-shadow: 0 0 3px #fff;
        }  

`

export const UserАvatar = styled.div`
    position: relative;
    margin-top: 5px;
    flex 0 0 40px;
    height: 40px;
    width: 40px;
    margin-right: 10px;
    img{
        border-radius: 50%; 
        height: 100%;
        width: 100%;            
    }
    div.avatar--symbol{
        text-align: center;
        padding-top: 2px;
        font-size: var(--font-size-m);
        border-radius: 50%;
        height: 100%;
        width: 100%;     
    }

`

export const IsOnline = styled.div.attrs (() => ({
    className: "isonline"
}))`
    &:before {
        display: block;
        position: absolute;
        bottom: 0px;
        right: 0px;
        content: "";
        background-color: var(--color-online);
        border: solid #333;
        border-radius: 30px;
        width: 15px;
        height: 15px;
    }
`

export const DlgItm = styled.div`
    
    display: flex;
    
`
