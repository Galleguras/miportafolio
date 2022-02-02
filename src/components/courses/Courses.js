import React from 'react'
import styled from 'styled-components'
import CoursesList from './CoursesList'
import { sizes, device } from '../../styles/responsive'
const CoursesContainer = styled.div`
    display: flex;
    color: white;
    background-color: black;
    height: 70vh;
    ${device.mobile`flex-direction: column;`}
`

const CoursesTitle = styled.div`
    display: flex;

    flex: 1;
    text-align: center;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    ${device.tablet`padding:0 10px`}
`

const CoursesData = styled.div`

    flex: 2;
    display:flex
    align-self: stretch;
`

const Courses = () => {
    const text = 'One \n Two \n Three'
    return (
        <CoursesContainer>
            <CoursesTitle>
                <h2>
                    Certificaciones
                    <br />y
                    <br />
                    Cursos
                </h2>
            </CoursesTitle>
            <CoursesData>
                <CoursesList />
            </CoursesData>
        </CoursesContainer>
    )
}

export default Courses
