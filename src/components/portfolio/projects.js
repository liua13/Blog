import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Project from "./project"
import projectData from "../../data/projectData.json"

const SectionWrapper = styled.div`
  background-color: #eeeeee;
  padding: 100px 7vw;
`
const HeaderWrapper = styled.h3`
  text-align: center;
  font-size: 35px;
`

const ProjectWrapper = styled.div`
  margin: 30px auto 0px auto;
  display: block;
  text-align: center;
`

const Projects = () => {
  const images = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "projectImages" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  if (window.outerWidth <= 975) {
    return (
      <SectionWrapper id="projects">
        <Fade bottom>
          <HeaderWrapper>PROJECTS</HeaderWrapper>
        </Fade>

        <ProjectWrapper>
          {projectData.map(project => {
            const projectImage = images.allFile.edges.find(
              x => x.node.childImageSharp.fluid.originalName === project.image
            )

            return (
              <Fade bottom key={project.id}>
                <Project
                  key={project.id}
                  id={project.id}
                  date={project.date}
                  title={project.title}
                  caption={project.caption}
                  description={project.description}
                  link={project.link}
                  technologies={project.technologies}
                  image={projectImage.node.childImageSharp.fluid}
                />
              </Fade>
            )
          })}
        </ProjectWrapper>
      </SectionWrapper>
    )
  } else {
    const data = projectData.reduce(function (rows, key, index) {
      return (
        (index % 2 === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows
      )
    }, [])

    return (
      <SectionWrapper id="projects">
        <Fade bottom>
          <HeaderWrapper>PROJECTS</HeaderWrapper>
        </Fade>
        <ProjectWrapper>
          {data.map(projects => (
            <Fade bottom key={projects[0].id}>
              <>
                {projects.map(project => {
                  const projectImage = images.allFile.edges.find(
                    x =>
                      x.node.childImageSharp.fluid.originalName ===
                      project.image
                  )
                  return (
                    <Project
                      key={project.id}
                      id={project.id}
                      date={project.date}
                      title={project.title}
                      caption={project.caption}
                      description={project.description}
                      link={project.link}
                      technologies={project.technologies}
                      image={projectImage.node.childImageSharp.fluid}
                    />
                  )
                })}
              </>
            </Fade>
          ))}
        </ProjectWrapper>
      </SectionWrapper>
    )
  }
}
export default Projects
