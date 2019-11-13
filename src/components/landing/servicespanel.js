import React from 'react'
import styled from 'styled-components'

const Background = styled.div`
    background-color: #ff2222;
`

const Screen = styled.div`
    background: rgba(255, 255, 255, 0.5);
    width: 45%;
    margin: 0;
    margin-left: 10%;
    padding: 7% 10% 3% 6%;
`
const Title = styled.h1`
    font-size: 500%;
    width: 75%;
    margin: 0 0 8% 7%;
    padding: 0 0 0 1rem;
    line-height: 0.8;
    border-left 1rem solid red;
`
const Boxes = styled.div`
    display: flex;
`
const Box = styled.div`
    width: 50%;
`

const ServicesPanel = () => {
    return (
        <Background>
            <Screen>
                <Title>What We Do</Title>
                <Boxes>
                    <Box>
                        <h1>Repaint &amp; Restoration</h1>
                        <p>
                            Whether it's the typical repaint, or a full-out
                            restoration, our rehabilitation division has the
                            knowledge and experience to get the job done.  Our
                            employees know how to work with discerning clientele
                            and make every resident happy with the end-product.
                        </p>
                    </Box>
                    <Box>
                        <h1>New Construction Painting</h1>
                        <p>
                            Our new construction division boasts some of the
                            largest and most complex structures in Florida.  We
                            know how to meet the ever tightening deadlines
                            developers and general contractors require these
                            days.
                        </p>
                    </Box>
                </Boxes>
            </Screen>
        </Background>
    )
}

export default ServicesPanel
