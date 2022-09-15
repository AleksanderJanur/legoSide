import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'

interface AppButtonProps {
    onClick?: any;
    color?: string;
    text: string;
}

const StyledButton = styled(Button)`
  text-transform: uppercase;
  && {
    display: block;
    font-family: Andada-bold;
    padding-left: 50px;
    padding-right: 50px;
    text-weight: bold;
    border-radius: 15px;
    margin:0 auto;
    
  }
`

export const AppButton: React.FC<AppButtonProps> = ({text, onClick}) => {
    return <StyledButton onClick={onClick} variant="contained">{text}</StyledButton>
}
