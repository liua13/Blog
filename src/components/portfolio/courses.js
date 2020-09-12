import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import courseData from "../../data/courseData.json"
import activityData from "../../data/activityData.json"

const SectionWrapper = styled.section`
  display: block;
  width: 80vw;
  margin: auto;
  padding: 100px 0;
`

const Column = styled.div`
  display: inline-block;
  width: 49.5%;
  vertical-align: top;

  @media (max-width: 750px) {
    width: 100%;
    border: 1px solid red;
  }
`

const HeaderWrapper = styled.h3`
  text-align: center;
  font-size: 35px;
`

const Courses = () => {
  return (
    <Fade bottom>
      <SectionWrapper id="courses">
        <Column>
          <HeaderWrapper>COURSES</HeaderWrapper>
          {courseData.map(course => (
            <Course term={course.term} courses={course.courses} />
          ))}
        </Column>

        <Column>
          <HeaderWrapper>ACTIVITIES</HeaderWrapper>
          {activityData.map(activity => (
            <Activity
              section={activity.section}
              activities={activity.activities}
            />
          ))}
        </Column>
      </SectionWrapper>
    </Fade>
  )
}

const Wrapper = styled.div``
const TermWrapper = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 20px 0px 0px 0px;
`
const CoursesWrapper = styled.div`
  margin: 5px 0px;
`
const CourseWrapper = styled.div`
  font-size: 15px;
`
const CourseNumber = styled.span`
  font-weight: bold;
  :after {
    content: ": ";
  }
`
const CourseName = styled.span`
  font-weight: normal;
  :after {
    content: " ";
  }
`
const CourseLanguage = styled.span`
  font-size: 10px;

  :before {
    content: "(";
  }

  :after {
    content: ")";
  }
`

const Course = ({ term, courses }) => {
  return (
    <Wrapper>
      <TermWrapper>{term}</TermWrapper>
      <CoursesWrapper>
        {courses.map(course => (
          <CourseWrapper>
            {course[0] ? <CourseNumber>{course[0]}</CourseNumber> : ""}
            <CourseName>{course[1]}</CourseName>
            {course[2] ? <CourseLanguage>{course[2]}</CourseLanguage> : ""}
          </CourseWrapper>
        ))}
      </CoursesWrapper>
    </Wrapper>
  )
}

const ActivityWrapper = styled.div`
  margin: 5px 0px;
  font-size: 15px;
`

const ActivityName = styled.span`
  font-weight: bold;
  :after {
    content: ": ";
  }
`

const ActivityDescription = styled.span`
  font-weight: normal;
`

const Activity = ({ section, activities }) => {
  return (
    <TermWrapper>
      <TermWrapper>{section}</TermWrapper>

      {activities.map(activity => (
        <ActivityWrapper>
          {activity["activity"] ? (
            <ActivityName>{activity["activity"]}</ActivityName>
          ) : (
            ""
          )}
          <ActivityDescription
            dangerouslySetInnerHTML={{ __html: activity["description"] }}
          ></ActivityDescription>
        </ActivityWrapper>
      ))}
    </TermWrapper>
  )
}

export default Courses
