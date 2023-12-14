/* eslint-disable react/prop-types */
import Card from "./Card";

export default function CardList({ obj, handleUpdate }) {
  let { cards } = obj;
  let contents = [];
  for (let objkey in cards) {
    contents.push(
      <Card
        category={objkey}
        key={objkey}
        titleDescriptionArr={cards[objkey]}
        handleUpdate={handleUpdate}
        obj={obj}
      ></Card>
    );
  }

  /*   let contents = obj.cards.map((currentCardObj, index) => (
    <Card
      index={index}
      key={currentCardObj.category}
      obj={obj}
      currentCardObj={currentCardObj}
      handleUpdate={handleUpdate}
    ></Card>
  )); */

  return <>{contents}</>;
}
