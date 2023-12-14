import { useState } from "react";
import "./App.css";
import PersonalInfo from "./components/PersonalInfo";
import CardList from "./components/CardList";
import { v4 } from "uuid";

function App() {
  const [obj, setObj] = useState({
    personalInfo: {
      name: "",
      img: "",
      address: "",
      email: "",
      number: "",
    },
    cards: {
      education: [
        {
          id: v4(),
          title: "",
          description: "",
        },
      ],
      experience: [
        {
          id: v4(),
          title: "",
          description: "",
        },
      ],
      skills: [{ id: v4(), title: "", description: "" }],
    },
  });

  const handleUpdate = (update) => {
    setObj(update);
    console.log(update);
  };

  console.log(obj);

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <PersonalInfo handleUpdate={handleUpdate} obj={obj}></PersonalInfo>
        <CardList obj={obj} handleUpdate={handleUpdate}></CardList>
      </div>
    </>
  );
}

export default App;
