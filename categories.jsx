import styled from 'styled-components';
import { Categoriesarray } from '../data';
import CategorieItem from './categorieItem';
import ShowProduct from '../pages/showproduct';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
  color : teal;
  background-color:gray;
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Categories = () => {
  return (
    <Container>
      <Title>CATEGORIES</Title>
      <CategoriesContainer>
        {Categoriesarray.map((item) => (
          <CategorieItem key={item.id} img={item.img} title={item.title}  />
        ))}
      </CategoriesContainer>
     
    </Container>
  );
};

export default Categories;
