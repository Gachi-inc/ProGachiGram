import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 var(--padding);
  width: 100%;
`;

export const Names = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const Name = styled.div`
  width: max-content;
  border: 2px solid white;
`;
