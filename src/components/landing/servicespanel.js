import React from 'react'
import styled from 'styled-components'
import Parallax from "../parallax"

const Screen = styled.div`
    padding-top: 50%;
    padding-bottom: 10%;
    background: rgba(0, 0, 0, 0.5);
`
const Title = styled.h1`
    font-size: 500%;
    width: 55%;
    margin: 0 auto;
    padding: 0 0 0 1rem;
    line-height: 0.8;
    border-left 1rem solid red;
    color: white;
`
const Boxes = styled.div`
    display: flex;
`
const Box = styled.div`
    width: 50%;
    background: ${props => props.color};
    display: flex;
    flex-direction: column;
    align-items: flex-${props => props.align};
    padding-left: 5%;
    padding-right: 5%;
`
const Text = styled.div`
    width: 70%;
    color: white;
    h1 {
        line-height: 0.8;
    }
`

const ServicesPanel = () => {
    return (
        <Parallax
            imagename="LaFirenzaDecksAdjusted.jpg"
        >
            <Screen>
                <Title>What We Do</Title>
                <Boxes>
                    <Box
                        color="rgba(41, 41, 41, 0.78)"
                        align="end"
                    >
                        <Text>
                            <h1>Repaint &amp; Restoration</h1>
                            <p>
                                Whether it's the typical repaint, or a full-out
                                restoration, our rehabilitation division has the
                                knowledge and experience to get the job done.  Our
                                employees know how to work with discerning clientele
                                and make every resident happy with the end-product.
                            </p>
                        </Text>
                    </Box>
                    <Box
                        color="rgba(241, 14, 14, 0.6)"
                        align="start"
                    >
                        <Text>
                            <h1>New Construction Painting</h1>
                            <p>
                                Our new construction division boasts some of the
                                largest and most complex structures in Florida.  We
                                know how to meet the ever tightening deadlines
                                developers and general contractors require these
                                days.
                            </p>
                        </Text>
                    </Box>
                </Boxes>
            </Screen>
        </Parallax>
    )
}

export default ServicesPanel
