import { styled } from "styled-components"
import { PopularProducts } from "../data"
import Product from "./product"
const Container = styled.div`
padding : 20px;
// display : flex;
// flex-wrap: wrap;
// justify-content: space-between;
`
const Title1 = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color : teal;
  background-color : gray;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  // gap: 20px;
`;
const Products = () => {
  return (
    <Container>
      <Title1>PRODUCTS</Title1>
      <ProductContainer>
      {PopularProducts.map((items =>
      
        <Product key = {items.id} img = {items.img} />
     
      ))}
      </ProductContainer>
    </Container>
  )
}

export default Products;
