import React from "react";

const Person = () => {
  return (
    <div>
      <p>My name is Jake!</p>
      <p>I am {Math.floor(Math.random() * 30)} years old</p>
    </div>
  );
};

export default Person;
