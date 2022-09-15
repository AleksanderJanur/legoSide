import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components'

interface ShippingDetailsProps {
    validData: {};
    setValidData: (validData: {}) => void;
    errors:{[key:string]:boolean};
    setErrors: (validData: {}) => void;
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


export const ShippingDetails: React.FC<ShippingDetailsProps> = ({validData, setValidData, errors, setErrors}) => {

    const validateEmail = (value: any) => {
        const re = /\S+@\S+\.\S+/;
        console.log(value)
        return re.test(value);
    };

    const validatePhone = (value: any) => {
        const re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return re.test(value) && value.length > 7 && value.length < 16;
    };

    const validateDate = (value: any) =>{
        const reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
        return !!value?.match(reg);
    }

    const validateZipCode = (value:any) => {
        const re = /^[0-9\b]+$/
        return re.test(value) && value.length === 5
    }

    const validateAddress = (value:any) => {
        return value.length > 8 && value.length < 40
    }

    const validateCurrentEvent = (name:string, value:string) => {
        switch(name){
            case 'email':
                return !validateEmail(value);
            case 'phone':
                return !validatePhone(value);
            case 'date':
                return !validateDate(value);
            case 'code':
                return !validateZipCode(value);
            case 'address':
                return !validateAddress(value);
            default:
                return !(value.length > 0 && value.length < 35)
        }
    }

    const validateOnChange = (event:any) => {
        setErrors({
            ...errors,
            [event.target.name]:validateCurrentEvent(event.target.name, event.target.value)
        })
    }

    const updateValidData = (event: any) => {
        validateOnChange(event)
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
                    helperText="Name can not be empty"
                    error={errors.name}
                />
                <StyledTextField
                    variant="filled"
                    label="Surname"
                    name="surname"
                    onChange={updateValidData}
                    helperText="Surname can not be empty"
                    error={errors.surname}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Phone Number"
                    name="phone"
                    onChange={updateValidData}
                    helperText="Phone should look like +4865412395"
                    error={errors.phone}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Email"
                    name="email"
                    onChange={updateValidData}
                    helperText="Email should look like test@test.com"
                    error={errors.email}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Date of birth"
                    name="date"
                    onChange={updateValidData}
                    helperText="Date of birth should look like 01/01/1970"
                    error={errors.date}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="Address"
                    name="address"
                    onChange={updateValidData}
                    helperText="Address must have more than 8 letters and less than 40"
                    error={errors.address}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="City"
                    name="city"
                    onChange={updateValidData}
                    helperText="City can not be empty"
                    error={errors.city}
                />
            </TextFieldDiv>
            <TextFieldDiv>
                <StyledTextField
                    variant="filled"
                    label="State"
                    name="cityState"
                    onChange={updateValidData}
                    helperText="State can not be empty"
                    error={errors.cityState}
                />
                <StyledTextField
                    variant="filled"
                    label="Zip Code"
                    name="code"
                    onChange={updateValidData}
                    helperText="Zip code must have length equal to 5 and contains only numbers "
                    error={errors.code}
                />
            </TextFieldDiv>
        </Box>
    </Div>
);
}
