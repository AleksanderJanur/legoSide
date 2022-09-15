import React from 'react'
import styled from 'styled-components'

interface MinifigDetailsProps {
    name: string;
    part_num: string;
    image: string;

}

const Div = styled.div`
  display: flex;
  margin-top: 20px;
`
const StyledImg = styled.img`
  max-width: 64px;
`
const Title = styled.div`
  margin-left:10px;
  color: black;
  font-weight: bold;
`
const Description = styled.div`
  margin-top:5px;
  margin-left:10px;
  color: orange;
`
const DescriptionDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;
`

export const MinifigDetails: React.FC<MinifigDetailsProps> = ({name, part_num, image}) => {
    return (
        <Div>
            <StyledImg
                src={image}/>
            <DescriptionDiv>
                <Title>{name}</Title>
                <Description>{part_num}</Description>
            </DescriptionDiv>
        </Div>
    )
}
