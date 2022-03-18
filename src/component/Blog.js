import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <ShowBlog heading="The one man army" author="sunsan rajapaksa" key="1"></ShowBlog>
      <ShowBlog heading="The sided army" author="yenhesun gun" key="2"></ShowBlog>
      <ShowBlog key="3" heading="The Thorn army" author="oliksandar slovaskestin"></ShowBlog>
    </div>
  );
};

const ShowBlog = (props) => {
  console.log(props);
  return (
    <div className="container">
      <h1>{props.author}</h1>
      <h3>{props.heading}</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil deleniti doloribus veritatis
        laboriosam voluptate, a hic, vero eligendi qui neque dolore dicta consequuntur ab harum! Et quos,
        adipisci obcaecati aliquid corporis quisquam nulla quis quas sint! Magnam ipsa quia, corporis expedita
        earum accusamus architecto sit tempora perspiciatis eaque corrupti. Odio molestiae quia sunt
        aspernatur earum unde adipisci ab repudiandae harum.
      </p>
    </div>
  );
};

export default Blog;
