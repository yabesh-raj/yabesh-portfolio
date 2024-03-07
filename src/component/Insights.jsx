import { useState, useEffect } from "react";

function Insights({ show }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    <div className={`insights-overlay ${visible ? "visible" : "hidden"}`}>
      <div className='insights-modal'>
        <div className='title'>
        Project Overview:

This Python analysis focuses on exploring and visualizing a dataset related to movies and TV shows. The dataset is loaded from an Excel file, and various data cleaning and visualization techniques are applied to gain insights into the distribution of content based on genres, release years, ratings, and types (movies or TV shows). The analysis employs popular data analysis libraries such as pandas, seaborn, and matplotlib.

Key Findings:

Yearwise Movie/TV Shows Release:

The analysis reveals the distribution of movies and TV shows over the years.
A count plot provides a visual representation of the number of releases each year, showcasing trends and patterns.
Top Genres:

The project identifies the top 10 most-watched genres based on the dataset.
A count plot illustrates the popularity of each genre, offering insights into viewer preferences.
Least Watched Genres:

The analysis also explores the least watched genres, shedding light on less popular content categories.
A corresponding count plot visually represents the least watched genres.
Top Ratings:

The project investigates the distribution of ratings among movies and TV shows.
A count plot reveals the top 10 ratings categories, providing an understanding of viewer preferences.
Genre Distribution:

A pie chart showcases the percentage distribution of genres in the dataset.
This visualization offers a concise overview of the genre landscape in terms of popularity.
Genre Distribution Over Last 5 Years:

The analysis groups movies and TV shows by release year and genre, highlighting trends over the past five years.
A line chart provides a dynamic visualization of genre distribution trends.
Type Distribution:

The project examines the distribution of content types, distinguishing between movies and TV shows.
A pie chart visually represents the percentage of each type in the dataset.
Conclusions:

The project provides a comprehensive exploration of the dataset, offering valuable insights into the distribution and trends of movies and TV shows.
Viewers' preferences in terms of genres, ratings, and release years are highlighted, enabling a better understanding of popular content.
The visualizations produced throughout the analysis enhance the interpretability of the findings.
This analysis serves as a foundation for further investigations and can be a valuable resource for content creators, streaming platforms, and researchers in the entertainment industry.
        </div>

        <button onClick={() => setVisible(!visible)}>Back</button>
      </div>
    </div>
  );
}

export default Insights;