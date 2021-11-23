import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import data from "./movies.json";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect } from "react";
import { useState} from "react";

function SingleMovieFetch() {
  const {movid} = useParams();

  const [singledata, setSingleData] = useState([]);

  useEffect(async () =>{
      try{
          const response = await axios.get(`http://localhost:3001/movie/${movid}`); 
          console.log(response);
          setSingleData([response.data]);
          console.log([response.data]);
      }
      catch(error){
          console.error(error);
      }

      },[]);

  return ( 
    <div>
      <Container fluid style={{ padding: "5%", background: "pink" }}>
        <Row>
          {singledata.map((mov) => {
            return(
                <Col  key={mov.id } xs={6} md={4} lg={3} style={{ marginBottom: "2%" }}>
              <Card>
                <Card.Img variant="top" src={mov.image} />
                <Card.Body>
                  <Card.Title>{mov.title}</Card.Title>
                  <Card.Text>{mov.actor}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            )  
              
            
          })}
              
        </Row>
      </Container>
    </div>
  );
}

export default SingleMovieFetch ;



