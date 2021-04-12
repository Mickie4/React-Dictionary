import React, { useState } from "react";
import { Input, SearchBtn } from "../styled-components/Search-styling";
import Descriptions from "./Descriptions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
export default function Search() {
  const [keyword, setKeyword] = useState("null");
  const [dictionaryData, setDictionaryData] = useState(null);

  function showResults(response) {
    setDictionaryData(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showResults);
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
      <Descriptions data={dictionaryData} />
    </div>
  );
}
