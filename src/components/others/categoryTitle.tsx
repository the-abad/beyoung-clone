import React from "react";
import './style.css';

// Define a type for the component props
type CategoryTitleProps = {
  title: string;
};

// Use the defined type for the props
const CategoryTitle: React.FC<CategoryTitleProps> = (props) => {
  return (
    <>
      <a id={props.title}></a>
      <div className="headingbb wrapper">
        <span className="headingname">{props.title}</span>
      </div>
    </>
  );
};

export default CategoryTitle;
