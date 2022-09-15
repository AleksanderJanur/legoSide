import { Grid } from '@mui/material';
import React, {useState} from 'react'
import {ShippingDetails} from "../components/inputs/ShippingDetails";
import styled from 'styled-components';
import {SummaryDetails} from "../components/inputs/SummaryDetails";


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 95vh;
`


interface validDataProps {
    [key: string]: string
}

interface errorsProps {
    [key: string]: boolean
}



export const PaymentPage = () => {
    const [validData, setValidData] = useState<validDataProps>({})
    const [errors, setErrors] = useState<errorsProps>({})
    return (
        <Div>
            <Grid container spacing={2}>
                <Grid item md={8} sm={12}>
                    <ShippingDetails
                        validData = {validData}
                        setValidData = {setValidData}
                        errors = {errors}
                        setErrors = {setErrors}
                    />
                </Grid>
                <Grid item md={4} sm={12}>
                    <SummaryDetails maxHeight={true} isModal={false} errors={errors}/>
                </Grid>
            </Grid>
        </Div>
    )

}
