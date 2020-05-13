import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/Layout"
import { graphql } from "gatsby"
import Card from "../components/Card"
import Section from "../components/Section"
import Wave from "../components/Wave"
import { Helmet } from "react-helmet"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import styled from "styled-components"

const Application = ({ data }) => (
  <div className-Application>
    <Layout />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          Learn to
          <br /> design and code React apps
        </h1>
        <p>
          Complete courses about the best tools and design systems.Prototype and
          build apps with React and Swift.
        </p>
        <Link to="/page-2">watch the video</Link>
        <div className="Logos">
          <img src={require("../images/avatar.png")} width="50" />{" "}
          <img src={require("../images/avatar.png")} width="50" />{" "}
          <img src={require("../images/avatar.png")} width="50" />{" "}
          <img src={require("../images/avatar.png")} width="50" />{" "}
          <img src={require("../images/avatar.png")} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 Courses,more coming</h2>
      <div className="CardGroup">
        <Card
          image={require("../images/wallpaper.jpg")}
          title="React for Designers"
          text="12 Sections"
        />{" "}
        <Card
          image={require("../images/wallpaper.jpg")}
          title="React for Designers"
          text="12 Sections"
        />{" "}
        <Card
          image={require("../images/wallpaper.jpg")}
          title="React for Designers"
          text="12 Sections"
        />{" "}
        <Card
          image={require("../images/wallpaper.jpg")}
          title="React for Designers"
          text="12 Sections"
        />
        <Card
          image={require("../images/wallpaper.jpg")}
          title="React for Designers"
          text="12 Sections"
        />
      </div>
    </div>
    <Section
      image={require("../images/wallpaper.jpg")}
      logo={require("../images/avatar.png")}
      title="React for Designer"
      text="Learn how to build a modern site using React and the most efficient librarias to get your sit/product online. Get familiar with components, gird css, animations, interactions, dynamic data with Contentful and deploy your site with Netlify."
    />

    <SectionCaption>12 section - 6 hours</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map((cell, index) => (
        <Cell key={index} image={cell.image} title={cell.title} />
      ))}
    </SectionCellGroup>
  </div>
)

export default Application

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const SectionCaption = styled.p`
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  color: #94a4ba;
  text-align: center;
`

const SectionCellGroup = styled.div`
  grid-column-gap: 20px;
  max-width: 680px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`
