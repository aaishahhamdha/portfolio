import React from 'react';
import "./Blogs.css"
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';
import blog4 from '../../assets/langchain3.webp';

const blogPosts = [
  {
    title: "Basics of Mastering Time Management: The Secret Weapon for Programmers",
    image: blog1,
    snippet: "As a beginner in programming myself, I’ve experienced the challenges of juggling multiple tasks and d...",
    link: "https://medium.com/@aaishamdha/mastering-time-management-the-secret-weapon-for-programmers-01038a0aa607"
  },
  {
    title:"An Introduction to Web Scraping: Unlocking the Power of Web Data" ,
    image: blog2,
    snippet:"Web Scraping — you may have heard this term numerous times without fully understanding what it means..." ,
    link: "https://medium.com/@aaishamdha/an-introduction-to-web-scraping-unlocking-the-power-of-web-data-9fd880312007"
  },
  {
    title: "Talk to your databases:A guide to NL to SQL query generation",
    image: blog4,
    snippet: "Have you ever wondered what if you get to generate your queries, and later use them to...",
    link: "https://medium.com/@aaishamdha/dynamically-adding-elements-in-react-mapping-and-chunking-arrays-35953587e5b4"
  },
  {
    title: "Dynamically Adding Elements in React: Mapping and Chunkin..",
    image: blog3,
    snippet: "When I first began my journey with React, I developed my portfolio website. It was my initial foray...",
    link: "https://medium.com/@aaishamdha/dynamically-adding-elements-in-react-mapping-and-chunking-arrays-35953587e5b4"
  },

];

const Blogs = () => {
  return (
    <section>
      <div className='blog-container'>
        {blogPosts.map((post, index) => (
          <div className='blog-card' key={index}>
            <img src={post.image} alt={post.title} className='blog-image' />
            <h2 className='blog-title'>{post.title}</h2>
            <p className='blog-snippet'>{post.snippet}</p>
            <a href={post.link} className='read-more' target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
