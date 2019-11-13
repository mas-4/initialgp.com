import React from 'react'
import styled from 'styled-components'
import Roll from 'react-reveal/Roll'

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
            <Roll right>
                <Title>
                    Take care of the customer and everything else will take care
                    of itself.
                </Title>
            </Roll>
        </Screen>
    )
}

export default MissionPanel
