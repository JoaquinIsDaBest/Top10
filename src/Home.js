import * as React from "react";
import { Container, Row, Col } from "reactstrap";
export default function Home() {
  return (
    <div className="body">
      <h1>Top 10's of All Time</h1>
      <Container>
        <hr />
        <Row>
          <Col>
            <h3>The Bunny</h3>
            <img
              src="https://p4.wallpaperbetter.com/wallpaper/204/370/353/bunny-wallpaper-preview.jpg"
              width="400px"
            />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
}
