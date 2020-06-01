import styled from 'styled-components';


export const StyledThemeSwitch = styled.div.attrs({
    media: `{this.isActive() ? 'screen' : 'none'}`,
})`
    
    html { filter: invert(100%); background: #fefefe }
    * { background-color: inherit }
    img:not([src*=".svg"]), video { filter: invert(100%) }
`;