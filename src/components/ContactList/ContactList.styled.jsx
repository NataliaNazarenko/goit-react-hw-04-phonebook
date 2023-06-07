import styled from '@emotion/styled';

export const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: ${props => props.theme.spacing(2.5)};
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: ${props => props.theme.spacing(75)};
  align-items: center;
  padding: ${props => props.theme.spacing(2.5)};

  border-radius: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.spacing(0.25)} solid ${props => props.theme.colors.gray};
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow;
  transition-duration: 0.15s;

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Contact = styled.p`
  font-size: ${props => props.theme.fontSizes.small};
  line-height: ${props => props.theme.spacing(4.5)};
  margin: 0;
`;

export const DeleteButton = styled.button`
  display: flex;
  padding: ${props => props.theme.spacing(1.25)} ${props => props.theme.spacing(2)};
  background: ${props => props.theme.colors.tagBackground};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.small};

  line-height: ${props => props.theme.spacing(4.5)};
  font-weight: 600;
  justify-content: center;
  width: ${props => props.theme.spacing(15)};
  border-radius: ${props => props.theme.spacing(1.25)};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  border: ${props => props.theme.spacing(0.25)} solid ${props => props.theme.colors.accent};

  :hover {
    background: ${props => props.theme.colors.accent};
  }
`;
