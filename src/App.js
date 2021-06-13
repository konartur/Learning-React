import React from "react";
import List from "./List";
import Table from "./Table";
import data from "./data.json";
import ListGroup from "./ListGroup";
import comments from "./comments.json";
import Clock from "./Clock";

function App() {
  return (
    <React.Fragment>
      {/* <List items={["test1","test2","test3","test4"]}/>
      <Table data={data}/>
      <ListGroup items={comments}/> */}
      <Clock />
    </React.Fragment>
  );
}

export default App;
