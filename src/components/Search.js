import React, { useState } from "react";
import { Input, SearchBtn } from "../styled-components/Search-styling";
import Descriptions from "./Descriptions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
export default function Search() {
  const [keyword, setKeyword] = useState("null");
  const [dictionaryData, setDictionaryData] = useState(null);
  const [imagesData, setImagesData] = useState(null);

  function handleImagesResponse(response) {
    setImagesData(response.data.photos);
  }

  function showResults(response) {
    setDictionaryData(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showResults);

    let pexelsApiKey =
      "563492ad6f917000010000014e51b8f2262f470ab9ebbbfad12ff71f";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6&size=small`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handleImagesResponse);
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
      <Descriptions data={dictionaryData} images={imagesData} />
    </div>
  );
}
