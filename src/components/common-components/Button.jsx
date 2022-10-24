import { Button as BootstrapButton } from 'react-bootstrap';
import { ButtonLoading } from './StyledComponents';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  position: relative;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const ChildrenContainer = styled.div`
  ${({ isLoading }) => isLoading && 'visibility: hidden;'}
`;

export const Button = (props) => {
  const { children, disabled, isLoading = true, variant, ...restProps } = props;

  return (
    <ButtonContainer>
      <BootstrapButton
        disabled={disabled || isLoading}
        variant={variant}
        {...restProps}
      >
        <ChildrenContainer isLoading={isLoading}>{children}</ChildrenContainer>
      </BootstrapButton>
      {isLoading && <ButtonLoading variant={variant} />}
    </ButtonContainer>
  );
};
