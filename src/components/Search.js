import React, { useState } from "react";
import {
  StyledInput,
  StyledBtn,
  StyledCol,
  StyledContainer,
  StyledRow,
  Section,
  StyledForm,
} from "../styled-components/Search-styling";
import Descriptions from "./Descriptions";
import axios from "axios";
export default function Search() {
  const [keyword, setKeyword] = useState("null");
  const [dictionaryData, setDictionaryData] = useState(null);
  const [imagesData, setImagesData] = useState(null);

  //Pexels API's response
  function handleImagesResponse(response) {
    setImagesData(response.data.photos);
  }
  //Dictionary API's response
  function showResults(response) {
    setDictionaryData(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(showResults);

    let pexelsApiKey =
      "563492ad6f917000010000014e51b8f2262f470ab9ebbbfad12ff71f";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6&size=large2x`;
    axios
      .get(pexelsUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}` } })
      .then(handleImagesResponse);
  }

  //Here its where the keyword is defined
  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <StyledContainer className='search'>
      {" "}
      <StyledRow>
        <Section>
          <StyledCol>
            <StyledForm onSubmit={search}>
              <StyledInput
                placeholder='Search for a word'
                type='search'
                onChange={handleKeyword}></StyledInput>
              <StyledBtn>Search</StyledBtn>
            </StyledForm>
          </StyledCol>
        </Section>
      </StyledRow>
      <Descriptions data={dictionaryData} images={imagesData} />
    </StyledContainer>
  );
}
