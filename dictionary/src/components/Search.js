import React from "react";
import { Input, SearchBtn } from "../styled-components/Search-styling";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Search() {
  return (
    <div className='search'>
      {" "}
      <Row>
        <Col md={12} className='d-block text-center mt-3'>
          <Input placeholder='Search for a word'></Input>
          <SearchBtn>Search</SearchBtn>
        </Col>
      </Row>
    </div>
  );
}
