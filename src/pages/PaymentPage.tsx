import { Grid } from '@mui/material';
import React from 'react'
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



export const PaymentPage = () => {
    const [validData, setValidData] = React.useState<validDataProps>({})
    return (
        <Div>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <ShippingDetails
                        validData = {validData}
                        setValidData = {setValidData}
                    />
                </Grid>
                <Grid item xs={4}>
                    <SummaryDetails maxHeight={true} isModal={false} validData = {validData}/>
                </Grid>
            </Grid>
        </Div>
    )

}
