import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <div className="text-center mt-8 mx-4">
        <h3 className="text-3xl bold">How does react work?</h3>
        <p>
          Instead of manipulating the browser's DOM directly, React creates a
          virtual DOM in memory, where it does all the necessary manipulating,
          before making the changes in the browser DOM. React only changes what
          needs to be changed! React finds out what changes have been made, and
          changes only what needs to be changed.
        </p>
        <h3 className="text-3xl bold">Props vs state</h3>
        <p>
          Props are used to pass data from a parent component to a child
          component, while state is used to manage data within a component.
          Props are immutable and cannot be changed within a component, while
          state is mutable and can be updated using the setState function.
        </p>
        <h3 className="text-3xl bold">
          What is the other uses of useState without api data loading?
        </h3>
        <p>
          1.State management <br />
          2.Conditional rendering <br />
          3.Toggle flags (true/false) <br />
          4.Counter
        </p>
      </div>
    </div>
  );
};

export default Blog;
