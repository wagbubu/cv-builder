import { useState } from "react";

export default function ProfilePic({ type, obj, handleUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(obj.personalInfo.img);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = (value, type, obj) => (e) => {
    e.preventDefault();
    let newObj = { ...obj };
    newObj.personalInfo[type] = value;
    handleUpdate(newObj);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <form className="flex" onSubmit={handleSave(value, type, obj)}>
        <input
          value={value}
          onChange={handleChange}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs"
        />
        <button className="ml-2 btn btn-secondary" type="submit">
          Save
        </button>
      </form>
    );
  }

  return (
    <>
      <button className="lg:mr-16" onClick={handleEdit}>
        <div className="border-4 p-1 rounded-xl hover:border-pink-400">
          {obj.personalInfo.img ? (
            <img
              className="max-w-sm rounded-lg shadow-2xl"
              src={obj.personalInfo.img}
            ></img>
          ) : (
            <img
              className="w-64 rounded-lg shadow-2xl"
              src="src/assets/blankDP.webp"
            ></img>
          )}
        </div>
      </button>
    </>
  );
}
