import React from 'react'
import Parallax from "../parallax"
import styled from 'styled-components'

const Screen = styled.div`
    height: 50rem;
    color: white;
    background: rgba(0, 0, 0, 0.4);
`
const HeroText = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 5rem;
    background: rgba(0, 0, 0, 0.5);
    h1 {
        font-size: 500%;
        width: 85%;
        margin: 0 0 8% 7%;
        padding: 0 0 0 1rem;
        line-height: 0.9;
        border-left 1rem solid red;
    }
    h2 { font-size: 225%; }
`

const UnstyledHeroPanel = ({ className }) => {
    return(
        <Parallax
            imagename="BelleHarbor.jpg"
        >
            <Screen>
                <HeroText>
                    <h1>Serving the Southeast Since 1985</h1>
                    <h2>With over three decades in the industry, Glendale has you covered.</h2>
                </HeroText>
            </Screen>
        </Parallax>
    )
}

export default UnstyledHeroPanel
