import React from 'react'
import styled from 'styled-components'
import { useLocationContext } from '../../context/LocationProvider'
import { device } from '../../styles/responsive'
import CoursesList from './CoursesList'

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
    ${device.tablet`padding:0 10px;font-size: 20px;`}
    ${device.mobile`padding:0 10px;font-size: 20px;`}
`

const CoursesData = styled.div`
    flex: 2;
    display: flex;
`

const Courses = () => {
    const { language } = useLocationContext()
    /*  const { language } = useI18next() */
    const text = 'One \n Two \n Three'
    return (
        <CoursesContainer>
            <CoursesTitle>
                <h1>{language}</h1>
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
