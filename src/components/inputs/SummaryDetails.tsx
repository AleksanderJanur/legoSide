import React from 'react'
import styled from 'styled-components'
import {MinifigDetails} from '../cards/MinifigDetails';
import {AppButton} from "../buttons/AppButton";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {buyLegoMinifig, getCurrentMinifig, getMinifigsDetails} from "../../features/minifigs/minifigsSlice";
import {LegoCard} from "../cards/LegoCard";
import {useNavigate} from "react-router-dom";


interface validDateProps {
    name?: string;
    surname?:string;
    phone?:string;
    email?:string;
    date?:string;
    address?:string;
    city:string;
    cityState?:string;
    zip?:string;
}

interface SummaryDetailProps {
    value?: any;
    maxHeight: boolean;
    isModal: boolean;
    handleClose?: (open:boolean) =>void
    validData?: any;
}

interface DivProps {
    maxHeight: boolean;
}

const Div = styled.div<DivProps>`
    position: relative;
    width: ${(props) => (props.maxHeight ? '' : '30%')};
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


export const SummaryDetails: React.FC<SummaryDetailProps> = ({maxHeight, isModal,handleClose,validData}) => {
    const details = useAppSelector(getMinifigsDetails);
    const currentMinifig = useAppSelector(getCurrentMinifig)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const validateEmail = (value: any) => {
        const re = /\S+@\S+\.\S+/;

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

    const validateButton = () => {
        return (validData && validateEmail(validData.email) && validatePhone(validData.phone) && validateDate(validData.date) && validateZipCode(validData.code)
            && validateAddress(validData.address) && validData.name && validData.name.length > 0 && validData.surname && validData.surname.length > 0
            && validData.city && validData.city.length > 0 && validData.cityState && validData.cityState.length > 0)
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
