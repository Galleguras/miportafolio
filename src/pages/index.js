import * as React from 'react'
import Layout from '../Layout/Layout.jsx'
import styled from 'styled-components'
import coverVideo from '../media/coverVideo.mp4'
const Main = styled.div`
    border: 3px solid black;
    grid-area: 2 / 1 / 3 / 3;
    overflow-y: auto;
    max-height: calc(100vh - 100px);
`

const CoverContainer = styled.div`
    height: 100vh;
    width: 100%;
    object-fit: contain;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-size: 100px;
    }
    p {
        margin-top: 8px;
        color: white;
        font-size: 32px;
    }
`

const Video = styled.video`
    object-fit: cover;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
`

const IndexPage = () => (
    <Layout>
        <Main>
            {/*  <div style={{ height: '1300px' }}>
                <h1>index</h1>
            </div> */}
            <CoverContainer>
                <Video src={coverVideo} autoPlay loop muted></Video>
                <h1>Pablo Gallego Carmona</h1>
                <p>Developer | Designer | Content Creator | Entrepeneur</p>
            </CoverContainer>
        </Main>
    </Layout>
)

export default IndexPage
