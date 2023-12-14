import EditableText from "./EditableText";
import ProfilePic from "./ProfilePic";

export default function obj({ obj, handleUpdate }) {
  let editableTextsArray = [];
  for (let key in obj.personalInfo) {
    if (key !== "img") {
      editableTextsArray.push(
        <EditableText
          key={key}
          type={key}
          obj={obj}
          handleUpdate={handleUpdate}
        >
          {obj.personalInfo[key]}
        </EditableText>
      );
    }
  }

  return (
    <>
      <div className="hero pb-16 pt-16 bg-base-200 shadow-2xl">
        <div className="w-9/12 hero-content flex-col lg:flex-row lg:justify-self-start">
          <ProfilePic
            type="img"
            obj={obj}
            handleUpdate={handleUpdate}
          ></ProfilePic>
          <div>{editableTextsArray}</div>
        </div>
      </div>
    </>
  );
}
