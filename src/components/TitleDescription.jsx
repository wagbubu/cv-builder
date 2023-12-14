/* eslint-disable react/prop-types */
import { useState } from "react";

export default function TitleDescription({
  id,
  index,
  handleUpdate,
  obj,
  title,
  description,
  category,
}) {
  const [titleDescription, setTitleDescription] = useState({
    id: id,
    title: title,
    description: description,
  });
  const [isEdit, setIsEdit] = useState(false);

  // console.log(category);
  // console.log(index);

  const handleSave = (e) => {
    e.preventDefault();
    let newObj = { ...obj };
    newObj.cards[category][index] = titleDescription;
    handleUpdate(newObj);
    setIsEdit(false);
  };

  const handleChange = (tOrD) => (e) => {
    let newTitleDescription = { ...titleDescription };
    newTitleDescription[tOrD] = e.target.value;
    console.log(titleDescription);
    setTitleDescription(newTitleDescription);
  };
  console.log(titleDescription);

  const handleRemove = () => {
    let newObj = { ...obj };
    let arrayOfCategory = newObj.cards[category];
    let newArr = [
      ...arrayOfCategory.slice(0, index),
      ...arrayOfCategory.slice(index + 1),
    ];
    newObj.cards[category] = newArr;
    handleUpdate(newObj);
  };

  function placeHolderTitle() {
    switch (category) {
      case "education":
        return "Degree";
      case "experience":
        return "Role";
      case "skills":
        return "Skill";
    }
  }

  function placeHolderDescription() {
    switch (category) {
      case "education":
        return "University";
      case "experience":
        return "Company";
      case "skills":
        return "Used in..";
    }
  }

  if (isEdit) {
    return (
      <form className="flex flex-col" onSubmit={handleSave}>
        <input
          placeholder={placeHolderTitle()}
          className="input input-bordered input-secondary w-full max-w-xs mt-4"
          value={titleDescription.title}
          onChange={handleChange("title")}
          required
        ></input>
        <input
          placeholder={placeHolderDescription()}
          className="input input-bordered input-secondary w-full max-w-xs mt-4"
          value={titleDescription.description}
          onChange={handleChange("description")}
          required
        ></input>
        <button className="btn btn-secondary w-min mt-4" type="submit">
          Save
        </button>
      </form>
    );
  }
  if (title == "" || description == "") {
    setIsEdit(true);
  }
  return (
    <>
      <div className="mt-4 px-4 flex justify-between">
        <div>
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-xl">{description}</p>
        </div>
        <div>
          <button className="mr-8" onClick={() => setIsEdit(true)}>
            📝
          </button>
          <button onClick={handleRemove}>❌</button>
        </div>
      </div>
    </>
  );
}
