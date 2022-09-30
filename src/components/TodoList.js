import React from "react";

function TodoList() {
  const homeList = [
    { title: "Sketch painting", id: 1 },
    { title: "Walk doggies", id: 2 },
    { title: "Mop floor", id: 3 },
    { title: "Cut Floyd nails", id: 4 },
    { title: "Water plants", id: 5 },
    { title: "Order stuffs", id: 6 },
    { title: "Find office couch", id: 7 },
  ];

  return (
    <>
      <h1>Do Tos</h1>

      {/* Home list */}
      <h3>Home List</h3>
      <ul>
        {homeList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
