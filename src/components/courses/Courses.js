import { useTranslation } from 'gatsby-plugin-react-i18next'
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
    ${device.mobile`flex-direction: column; `}
`

const CoursesTitle = styled.div`
    display: flex;
    flex: 1;
    text-align: center;
    font-size: 30px;
    justify-content: center;
    align-items: center;
    ${device.tablet`padding:0 10px;font-size: 20px;`};
    ${device.mobile`padding:0 10px;font-size: 20px;`}
    h2 {
        word-spacing: 9999px;
    }
`

const CoursesData = styled.div`
    flex: 2;
    display: flex;
    ${device.tablet`height: 70vh`};
    ${device.mobile`height: 20vh;`}
`

const Courses = () => {
    const { t } = useTranslation()

    return (
        <CoursesContainer>
            <CoursesTitle>
                <h2>{t('Certificaciones y Cursos')}</h2>
            </CoursesTitle>
            <CoursesData>
                <CoursesList />
            </CoursesData>
        </CoursesContainer>
    )
}

export default Courses
