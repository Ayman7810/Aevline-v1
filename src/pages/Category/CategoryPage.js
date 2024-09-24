import "./style.css";
import NavMovePage from "../../components/Uitilty/NavMovePage/NavMovePage";
import { Col, Container, Row } from "react-bootstrap";
import ProducteCardContainer from "../../components/ProducteCardContainer/ProducteCardContainer";
import FilterCategory from "../../components/FilterCategory/FilterCategory";

const CategoryPage = () => {


  return (
    <div>
      <NavMovePage category={true} title='المنتجات' page='المنتجات' />
      <Container>
        <Row>
        <FilterCategory/>
        <Col sm="9">
            <ProducteCardContainer path='/producte-detalis/:id' sels={"للبيع"} color={"#f51167"} />
            {/* <ProducteCardContainer />
            <ProducteCardContainer  />
            <ProducteCardContainer  /> */}
          </Col>
        
      
 
        </Row>
   
      </Container>
    </div>
  );
};

export default CategoryPage;
