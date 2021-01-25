import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css';

function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaZubCo6dnCJmhYlITLHOaJRakxJqgsqEew&usqp=CAU" />
      <h1>title</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>John Doe</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById("root"));
