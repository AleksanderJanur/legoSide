import React from 'react'
import styled from 'styled-components'
import {MinifigDetails} from '../cards/MinifigDetails';
import {AppButton} from "../buttons/AppButton";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {buyLegoMinifig, getCurrentMinifig, getMinifigsDetails} from "../../features/minifigs/minifigsSlice";
import {LegoCard} from "../cards/LegoCard";
import {useNavigate} from "react-router-dom";



interface SummaryDetailProps {
    value?: any;
    maxHeight: boolean;
    isModal: boolean;
    handleClose?: (open:boolean) =>void
    errors?: any;
}

interface DivProps {
    maxHeight: boolean;
}

const Div = styled.div<DivProps>`
    position: relative;
    min-width: ${(props) => (props.maxHeight ? '' : '30%')};
    max-width:800px;
    background: white;
    margin: 0 auto;
    padding: 15px;
    border-radius: 15px;
    margin-top: 30px;
    min-height: 90vh;
`

const StyledH = styled.h1`
  margin: 15px;
  color: black;
  font-size: '24px'
  text-weight: bold;
  font-family: Andada-bold;
`
const StyledText = styled.h5`
  font-size: '18px'
  margin-top: 60px;
  margin-bottom: 30px;
`
const CenterButton = styled.div`
    position:absolute;
    bottom:15px;
    left: 50%;
    transform: translate(-50%, -50%)
`


export const SummaryDetails: React.FC<SummaryDetailProps> = ({maxHeight, isModal,handleClose, errors}) => {
    const details = useAppSelector(getMinifigsDetails);
    const currentMinifig = useAppSelector(getCurrentMinifig)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const validateButton = () => {
        const parsedErrors = Object.values(errors)
        return !parsedErrors.includes(true) && parsedErrors.length === 9
    }

    const goToCash = () => {
        dispatch(buyLegoMinifig()).then(()=>{
            navigate("/")
        })
    }

    return (
        <Div maxHeight={maxHeight}>
            <StyledH>SUMMARY</StyledH>
            <LegoCard name={currentMinifig.name} image={currentMinifig.set_img_url}
                      set_num={currentMinifig.set_num} showDetails={false}/>
            <StyledText>There are {currentMinifig.num_parts} parts in this minifig:</StyledText>
            {details.map((item: any) => (
                <div key={item.part.part_num}>
                    <MinifigDetails name={item.part.name} part_num={item.part.part_num} image={item.part.part_img_url}/>
                </div>
            ))}
                <CenterButton>
                    {!isModal ?
                        (validateButton()?<AppButton onClick={goToCash} text="SUBMIT" color="blue"/>:null): <AppButton onClick={handleClose} text="CLOSE" color="blue"/>}
                </CenterButton>
        </Div>
    )
}
