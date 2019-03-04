import React from "react";
import { connect } from "react-redux";
import ReactLoading from "react-loading";

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};

const App = () => (
  <div style={styles.app}>
    <h1>Todo List</h1>
    <h2>List of Todos:</h2>
    <p>Requirements:</p>
    <ul>
      <li>It diplays list of todos;</li>
      <li>It shows spinner while loading list;</li>
      <li>User is able to filter by All / Active / Compleated;</li>
      <li>Bonus: It displays name of the author, next to each task;</li>
    </ul>
    <ReactLoading color="#111e6c" type="spin" />
  </div>
);

export default connect(({ todos }) => ({ todos }))(App);
