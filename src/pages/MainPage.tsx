import React from 'react'
import styled from 'styled-components'
import {AppButton} from "../components/buttons/AppButton";
import {useAppDispatch} from "../app/hooks";
import {getHarryPotterMinifigs} from "../features/minifigs/minifigsSlice";
import { useNavigate } from 'react-router-dom';

const Div = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`

const Typography  = styled.h1`
  color: white;
  font-size: '18px'
  text-weight: bold;
  font-family: Andada-bold;
`


export const MainPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const fetchLegoMinifigs = () =>{
        dispatch(getHarryPotterMinifigs()).then((res:any)=>{
            if(res?.payload?.results && res.payload.results.length > 0){
                navigate('/minifigs')
            }
            else{
                alert("Something went wrong")
            }
        })

    }
    return (
        <Div>
            <Typography>LEGO MINIFIGS MYSTERY BOX</Typography>
            <AppButton onClick={fetchLegoMinifigs}  text="LET'S GO" color="blue"/>
        </Div>
    )

}

