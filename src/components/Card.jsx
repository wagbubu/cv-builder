/* eslint-disable react/prop-types */
import CardTitle from "./CardTitle";
import TitleDescription from "./TitleDescription";
import { v4 } from "uuid";

export default function Card({
  category,
  titleDescriptionArr,
  handleUpdate,
  obj,
}) {
  const titleDescription = titleDescriptionArr.map((e, index) => {
    return (
      <TitleDescription
        handleUpdate={handleUpdate}
        index={index}
        id={e.id}
        obj={obj}
        category={category}
        key={e.id}
        title={e.title}
        description={e.description}
      ></TitleDescription>
    );
  });

  const handleAdd = () => {
    let newObj = { ...obj };
    newObj.cards[category].push({ id: v4(), title: "", description: "" });
    handleUpdate(newObj);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <div className="card w-9/12 mt-8 bg-base-100 shadow-2xl">
        <div className="card-body">
          <CardTitle>{capitalizeFirstLetter(category)}</CardTitle>
          {titleDescription}
          <div className="card-actions mt-8 justify-end">
            <button onClick={handleAdd} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
