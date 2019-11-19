import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Screen = styled.div`
    padding: 20% 0;
    color: red;
    width: 40%;
    margin-left: 40%;
`
const Title = styled.h1`
    padding-left: 3%;
    font-size: 500%;
    line-height: 0.9;
    border-left 1rem solid black;
`

const MissionPanel = () => {
    return (
        <Screen>
            <Fade top>
                <Title>
                    Take care of the customer and everything else will take care
                    of itself.
                </Title>
            </Fade>
        </Screen>
    )
}

export default MissionPanel
