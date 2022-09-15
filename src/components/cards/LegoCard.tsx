import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styled from 'styled-components'
import {DetailsModal} from "../../modal/DetailsModal";
import {useState} from "react";
import {getMinifigDetails} from "../../features/minifigs/minifigsSlice";
import {useAppDispatch} from "../../app/hooks";

interface LegoCardProps {
    name: string;
    image: string;
    set_num: string;
    clicked?: string;
    showDetails: boolean;

}

interface StyledCardInterface {
    selected: boolean
}

interface StyledTypography {
    showDetails: boolean
}

const StyledCard = styled(Card)<StyledCardInterface>`
&& {
    border-radius: 10px;
    text-align: center;
    padding: 30px 60px 30px 60px;
    text-weight: bold;
    min-width:120px;
    box-shadow:${(props) => props.selected ? '0px 0px 20px 10px rgba(255, 137, 4, 1)' : ''};
}
`

const StyledTypography = styled.p<StyledTypography>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${(props) => !props.showDetails ? '100%' : '220px'};
  font-family: Andada-bold;
  text-align: center;
`

const StyledCardMedia = styled.img`
  max-width: 180px;
`

const StyledDetails = styled.div`
  color: orange;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  margin-top: 5px;
`


export const LegoCard: React.FC<LegoCardProps> = ({name, image, set_num, clicked, showDetails}) => {
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch();
    const getDetails = () =>{
            dispatch(getMinifigDetails(set_num)).then((res: any) => {
                if (res?.payload?.results && res.payload.results.length > 0) {
                    setOpen(true);
                } else {
                    alert("Something went wrong")
                }
            })
        }
    return (
        <StyledCard selected={set_num === clicked}>
            <DetailsModal open = {open} setOpen = {setOpen}/>
            <StyledCardMedia src={image}></StyledCardMedia>
            <CardContent>
                <StyledTypography showDetails={showDetails}>
                    {name}
                </StyledTypography>
                {
                    showDetails ?
                        <StyledDetails onClick={getDetails}>
                            Show details
                        </StyledDetails> : null
                }
            </CardContent>
        </StyledCard>
    );
}
