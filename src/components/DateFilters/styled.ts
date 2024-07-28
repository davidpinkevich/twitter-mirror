import styled from 'styled-components';

const StyledDateFilters = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const StyledDateFiltersItems = styled.div<{ $disabled: boolean }>`
  display: flex;
  gap: 20px;
  & button {
    opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.$disabled ? 'none' : 'all')};
  }
`;

const StyledDateFiltersTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.signup.h3};
  font-weight: 700;
  margin-bottom: 32px;
`;

const StyledDateFiltersInfo = styled.p`
  color: ${(props) => props.theme.colors.darkGray};
  line-height: 160%;
  margin-bottom: 32px;
`;

export { StyledDateFilters, StyledDateFiltersItems, StyledDateFiltersTitle, StyledDateFiltersInfo };
