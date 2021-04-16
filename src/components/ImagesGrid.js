import React from "react";
import {
  ImageGrid,
  StyledRow,
  StyledContainer,
  GridContainer,
  Section,
} from "../styled-components/ImagesGrid-styling";

export default function ImagesGrid(props) {
  if (props.images) {
    return (
      <Section>
        <StyledContainer>
          <StyledRow className='img-grid'>
            {props.images.map(function (image, index) {
              return (
                <GridContainer key={index} className='key'>
                  <a href={image.src.original} target='_blank' rel='noreferrer'>
                    <ImageGrid
                      src={image.src.landscape}
                      alt='related to the search'
                    />
                  </a>
                </GridContainer>
              );
            })}
          </StyledRow>
        </StyledContainer>
      </Section>
    );
  } else {
    return null;
  }
}
