import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'

interface ShippingDetailsProps {
    validData: {}
    setValidData: (validData: {}) => void
}


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height:100vh;
  
`

const StyledTextField = styled(TextField)`
  && {
    margin: 20px;
    border: 1px solid white;
    background: white;
    border-radius: 5px;
    font-weight: bold;
    width: 100%;
    @media (min-width: 1300px) {
      min-width: 400px;
    }
  }
`

const TextFieldDiv = styled.div`
   display:flex;
`

const StyledH = styled.h1`
  margin: 15px;
  color: white;
  font-size: '18px'
  text-weight: bold;
  font-family: Andada-bold;
`


export const ShippingDetails: React.FC<ShippingDetailsProps> = ({validData, setValidData}) => {
    const updateValidData = (event: any) => {
        setValidData({
            ...validData,
            [event.target.name]: event.target.value
        })
    }

return (
    <Div>
        <Box
            component="form"
            autoComplete="off"
        >
            <StyledH>SHIPPING DETAILS</StyledH>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Name"
                    name="name"
                    onChange={updateValidData}
                />
                <StyledTextField
                    variant="filled"
                    label="Surname"
                    name="surname"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Phone Number"
                    name="phone"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Email"
                    name="email"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Date of birth"
                    name="date"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Address"
                    name="address"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="City"
                    name="city"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="State"
                    name="cityState"
                    onChange={updateValidData}
                />
                <StyledTextField
                    variant="filled"
                    label="Zip Code"
                    name="code"
                    onChange={updateValidData}
                />
            </TextFieldDiv>
        </Box>
    </Div>
);
}
