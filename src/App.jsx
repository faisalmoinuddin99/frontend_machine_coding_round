import React from "react";
import ReactDom from "react-dom/client";
import CommentBox from "./components/CommentBox";

console.log("App component rendered");
const App = () => {
  return (
    <>
      <h1>Header</h1>
      <h2>Body</h2>
       <CommentBox/>
      <h3>Footer</h3>
    </>
  );
};

export default App;
