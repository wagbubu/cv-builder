import { useState } from "react";

export default function EditableText({ type, children, obj, handleUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(children);
  const regex = /^(?!\s*$).+/;
  //Handle Edit
  const handleEdit = () => {
    setIsEdit(true);
  };
  //Handle Save Logic
  const handleSave = (value, type, obj) => (e) => {
    e.preventDefault();
    let newobj = { ...obj };
    newobj.personalInfo[type] = value;
    handleUpdate(newobj);
    setIsEdit(false);
  };
  //handle input change
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  if (isEdit) {
    return (
      <form className="flex mt-4" onSubmit={handleSave(value, type, obj)}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder={type}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button className="ml-2 btn btn-secondary" type="submit">
          Save
        </button>
      </form>
    );
  }

  if(!( children )) {
    setIsEdit(true)
  }
  return (
    <>
      <div className="flex mt-4 lg:justify-start justify-center">
        <p className={type === "name" ? "text-5xl font-bold" : "text-lg"}>
          {regex.test(children) ? children : setIsEdit(true)}
        </p>
        <button className="ml-2" onClick={handleEdit}>
          <i className="hover:text-pink-600 fa-regular fa-pen-to-square"></i>
        </button>
      </div>
    </>
  );
}
