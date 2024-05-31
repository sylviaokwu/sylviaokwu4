/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ANALYSIS OF ENTRYLEVEL USER COMPLETION RATE 🎉",
    description:
      "I analysed the user completion rate of Entrylevel, an edtech company. I performed data transformation using SQL, conducted statistical tests using python and built the dashboard using Tableau.",
    url: "https://public.tableau.com/views/Entryleveldashboard_16859087494450/entrylevel_dashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
  {
    title: "THE WORLD UNIVERSITY RANKING ANALYSIS",
    description:
      "Analysed the Times Higher Education's World University ranking dataset to uncover insights. I used PowerBI for data cleaning and visualization while I used python for statistical analysisontributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMzIxZjE1MTgtMjlhOS00ZjdkLTgwNDYtM2JiZGRkM2M4YzM1IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  {
    title: "ANALYSIS OF NIGERIA PAST ELECTION",
    description:
      "Analyzed Nigeria's past election data obtained from Wikipedia to gain insight into the country's electoral history. The analysis involved exploring the data, cleaning it, and performing data visualization to communicate the findings..",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDkzYjNjZDUtZDJiZC00MzM4LTkxNzktYTkxMDY1ZjM0OTkwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  {
    title: "ANALYSIS OF AFRICAN CHILD MORTALITY",
    description:
      "This project aims to describe the prevalence of under-5 child mortality rates in selected African countries. PowerBI was used to analyze and identify possible causes of high under-5 mortality rates, forecast the trend of under-5 mortality rates from 2020-2025, and recommend possible solutions for mitigating the under-5 mortality rate.",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNmFhOGM5OGQtYTFhNC00M2JmLWE3MmUtYzg0NGUzMTYwMzJhIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
