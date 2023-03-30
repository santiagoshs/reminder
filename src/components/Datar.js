import React from "react";
import { useState } from "react";
import {
  Tasklist,
  Containerbtn,
  Forminput,
  Btnupdate,
  Inputupdate,
  Btndelete,
  Btnedit,
} from "../components/styles";

const FormEdit = ({ title, setIsEdit, onUpdate, id }) => {
  const [newValue, setNewValue] = useState(title);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const value = e.target.value;
    setNewValue(value);
  };
  const handleClickUpdateD = () => {
    //debugger;
    onUpdate(id, newValue);
    setIsEdit(false);
  };
  return (
    <>
      <Forminput className="UpdateForm" onClick={handleSubmit}>
        <Inputupdate type="text" onChange={handleChange} value={newValue} />
        <Btnupdate onClick={handleClickUpdateD}>Update</Btnupdate>
      </Forminput>
    </>
  );
};
const DatarInfo = ({ title, setIsEdit, onDelete, id }) => {
  return (
    <>
  
      <Tasklist className="task-list">
        {title}
        <Containerbtn>
          <Btnedit onClick={() => setIsEdit(true)}>Edit</Btnedit>
          <Btndelete onClick={(e) => onDelete(id)}>Delete</Btndelete>
        </Containerbtn>
      </Tasklist>
    </>
  );
};
const Datar = ({ item, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      {isEdit ? (
        <FormEdit
          id={item.id}
          title={item.title}
          onUpdate={onUpdate}
          setIsEdit={setIsEdit}
        />
      ) : (
        <DatarInfo
          title={item.title}
          setIsEdit={setIsEdit}
          onDelete={onDelete}
          id={item.id}
        />
      )}
    </div>
  );
};

export default Datar;
