import React, {useState} from 'react'
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {getMinifigDetails, getMinifigs} from "../features/minifigs/minifigsSlice";
import Minifigs from "../features/minifigs/minifigsInterface";
import {LegoCard} from '../components/cards/LegoCard';
import styled from "styled-components";
import {Grid} from '@mui/material';
import {AppButton} from "../components/buttons/AppButton";
import {useNavigate} from "react-router-dom";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  text-align: center;
   min-height: 90vh;  
`

const Typography  = styled.h1`
  color: white;
  font-size: '30px'
  text-weight: bold;
  font-family: Andada-bold;
`
const StyledGrid = styled(Grid)`
  && {
    margin-top: 15px;
    margin-bottom: 50px;
  }
`

export const ChooseMinifig = () => {
    const minifigs = useAppSelector(getMinifigs);
    const [clicked, setClicked] = useState('')
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fetchDetails = () =>{
        dispatch(getMinifigDetails(clicked)).then((res:any) =>{
            if(res?.payload?.results && res.payload.results.length > 0){
                navigate('/details')
            }
            else{
                alert("Something went wrong")
            }
        })
    }

    return (
        <Div>
            <Typography>CHOOSE YOUR MINING</Typography>
            <StyledGrid
                justifyContent="center"
                alignItems="center"
                container
                spacing={5}
            >
            {minifigs.map((item: Minifigs) => (
                <Grid onClick={()=>setClicked(item.set_num)} key={item.set_num} item>
                        <LegoCard name={item.name} image={item.set_img_url} set_num={item.set_num} clicked={clicked} showDetails={true}/>
                </Grid>
            ))}
            </StyledGrid>
            {clicked !== ''?<AppButton onClick={fetchDetails}  text="PROCEED TO SHIPMENT" color="blue"/>:null}
        </Div>
    )

}

