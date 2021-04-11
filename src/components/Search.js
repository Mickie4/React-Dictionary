import React, { useState } from "react";
import { Input, SearchBtn } from "../styled-components/Search-styling";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Search() {
  const [keyword, setKeyword] = useState("null");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className='search'>
      {" "}
      <Row>
        <Col md={12} className='d-block text-center mt-3'>
          <form onSubmit={search}>
            <Input
              placeholder='Search for a word'
              type='search'
              autoFocus={true}
              onChange={handleKeyword}></Input>
            <SearchBtn>Search</SearchBtn>
          </form>
        </Col>
      </Row>
    </div>
  );
}
