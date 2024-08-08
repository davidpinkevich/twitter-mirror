import styled from 'styled-components';

const StyledNF = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 507px;
  padding: 20px;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledNFImage = styled.img`
  position: absolute;
  bottom: 35px;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledNFInfo = styled.p`
  object-fit: cover;
  text-align: center;
  color: inherit;
  font-size: 24px;
  font-weight: 500;
`;

export { StyledNF, StyledNFImage, StyledNFInfo };
