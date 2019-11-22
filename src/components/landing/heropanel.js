import React from 'react'
import Parallax from '../parallax'
import styled from 'styled-components'
import bp from '../../breakpoints'

const Screen = styled.div`
    height: 60rem;
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
        font-size: 4rem;
        padding: 0 0 0 1rem;
        line-height: 1;
        border-left 1rem solid red;
    }
    h2 {
        font-size: 2.25rem;
    }
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
