import React from 'react';
import "./Blogs.css"
import blog1 from '../../assets/blog1.webp';
import blog2 from '../../assets/blog2.webp';
import blog3 from '../../assets/blog3.webp';
import blog4 from '../../assets/langchain3.webp';
import blog5 from '../../assets/blog5.webp';
import blog6 from '../../assets/blog6.jpg';
import blog7 from '../../assets/blog7.jpg';
import blog8 from '../../assets/blog8.jpg';

const blogPosts = [
  {
    title: "Building a Simple User Authentication System :Django Rest Framework(Part 2)",
    image: blog7,
    snippet: "User authentication is one of those essential features every app needs. It’s the key to allowing users to...",
    link: "https://medium.com/@aaishamdha/building-a-simple-user-authentication-system-django-rest-framework-part-2-6cf541f0ba17"
  },
  {
    title: "Sending Emails in Django: A Simple Guide",
    image: blog6,
    snippet: "Sending emails is a common feature in many web applications, such as sending a welcome email after registration or sending notifications. Fortunately, Django provides an...",
    link: "https://medium.com/@aaishamdha/sending-emails-in-django-a-simple-guide-850204c1b328"
  },
  {
    title: "Understanding User Authentication:Registering and Logging In (Part 1)",
    image: blog8,
    snippet: "User authentication is the gatekeeper of online security. It ensures that only you can access your accounts...",
    link: "https://medium.com/@aaishamdha/understanding-user-authentication-the-essentials-of-registering-and-logging-in-part-1-3768674d2766"
  },
  {
    title: "Integrating Asgardeo Authentication into Your React Application: A Guide",
    image: blog5,
    snippet: "Hey ! I recently tried integrating Asgardeo authentication into my React application, and I must say...",
    link: "https://medium.com/@aaishamdha/integrating-asgardeo-authentication-into-your-react-application-a-guide-cea21340c3a5"
  },
  {
    title: "Dynamically Adding Elements in React: Mapping and Chunking Arrays",
    image: blog3,
    snippet: "When I first began my journey with React, I developed my portfolio website. It was my initial foray...",
    link: "https://medium.com/@aaishamdha/dynamically-adding-elements-in-react-mapping-and-chunking-arrays-35953587e5b4"
  },
  {
    title: "Use AI and Talk to your databases: LangChain",
    image: blog4,
    snippet: "Ever felt like databases speak a completely different language? You’re not alone! Traditional database querying often feels like trying to decode an ancient script, especially ...",
    link: "https://medium.com/@aaishamdha/talk-to-your-databases-langchain-33245e63feba"
  },
  {
    title: "An Introduction to Web Scraping: Unlocking the Power of Web Data",
    image: blog2,
    snippet: "Web Scraping — you may have heard this term numerous times without fully understanding what it means...",
    link: "https://medium.com/@aaishamdha/an-introduction-to-web-scraping-unlocking-the-power-of-web-data-9fd880312007"
  },
  {
    title: "Basics of Mastering Time Management: The Secret Weapon for Programmers",
    image: blog1,
    snippet: "As a beginner in programming myself, I’ve experienced the challenges of juggling multiple tasks and d...",
    link: "https://medium.com/@aaishamdha/mastering-time-management-the-secret-weapon-for-programmers-01038a0aa607"
  }




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
