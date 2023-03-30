import { useState } from "react";
import { Inputext, Inputsubmit, Formstyle } from "../components/styles";
import Task from "./Task";
import Datar from "./Datar";
import { Skewed } from "../components/styles";

const AllApp = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const valueChange = e.target.value;
    setTitle(valueChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const temp = [...data];
    temp.unshift(newData);
    setData(temp);
    setTitle("");
  };
  const handleUpdate = (id, value) => {
    const temp = [...data];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setData(temp);
  };
  const handleDelete = (id) => {
    const tempDelete = data.filter((item) => item.id != id);
    setData(tempDelete);
    console.log(tempDelete);
  };

  return (
    <div className="allContainer">
      <section>
        <Skewed className="Skewed"></Skewed>
      </section>
      <Formstyle className="Formstyle" onSubmit={handleSubmit}>
        <Inputext
          onChange={handleChange}
          value={title}
          className="camp-txt"
        ></Inputext>
        <Inputsubmit
          onClick={handleSubmit}
          type="submit"
          className="btn-submit"
        ></Inputsubmit>
      </Formstyle>
      <div className="list-container">
        {data.map((item) => (
          <Datar
            item={item}
            key={item.id}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default AllApp;
