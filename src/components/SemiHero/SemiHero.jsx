import styled from "styled-components";
import Button from "../Button/Button";
import ImageOne from "../../assets/first.png";
const Container = styled.div``;
const ProductWrapper = styled.div``;
const Products = styled.div`
  grid-template-columns: auto auto auto;
`;
const Product = styled.div`
  background-color: #e6ecf3;
  height: 100%;
  padding: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: between;
`;

const ProductInfo = styled.div`
  flex: 0.8px;
`;
const ProductTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;
const Image = styled.img`
  top: 10px;
  max-width: 50%;
  transition: all 0.3s ;
  transition-timing-function: cubic-bezier(0.1, 0.9, 2, 0.1);

  &:hover {
    transform: scale(1.3);
  }
`;
const SemiHero = () => {
  return (
    <Container className="md:m-8 m-3 ">
      <ProductWrapper className="">
        <Products className="md:grid flex flex-col">
          <Product className="md:mr-8 mb-2">
            <ProductInfo>
              <ProductTitle className="mb-3">Tivoli Audio Model</ProductTitle>
              <Button text="SHOP NOW" />
            </ProductInfo>
            <Image src={ImageOne} />
          </Product>
          <Product className="md:mr-8 mb-2">
            <ProductInfo>
              <ProductTitle className="mb-3">Moneyphant With Twin</ProductTitle>
              <Button text="SHOP NOW" />
            </ProductInfo>

            <Image src={ImageOne} />
          </Product>
          <Product>
            <ProductInfo>
              <ProductTitle className="mb-3">
                Candleholder, Stainless
              </ProductTitle>
              <Button text="SHOP NOW" />
            </ProductInfo>

            <Image src={ImageOne} />
          </Product>
        </Products>
      </ProductWrapper>
    </Container>
  );
};

export default SemiHero;
