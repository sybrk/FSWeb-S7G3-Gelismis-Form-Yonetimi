import { useState } from "react";
//import  from 'yup';
import DataObj from "../Data/FormData";

const ValidationForm = () => {
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAndConditions: false,
    job: "",
  });

  const metaData = [
    {
      inputName: "name",
      inputType: "text",
    },
    {
      inputName: "email",
      inputType: "email",
    },
    {
      inputName: "password",
      inputType: "password",
    },
    {
      inputName: "termsAndConditions",
      inputType: "checkbox",
    },
    {
      inputName: "job",
      inputType: "text",
    },
  ];

  const FillFormWithData = (e) => {
    let valueCatcher =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    let nameCatcher = e.target.name;
    let temp_Obj = {
      ...FormData,
      [nameCatcher]: valueCatcher,
    };
    setFormData(temp_Obj);
    console.log("FormData", FormData);
  };

  const FormSubmitOnceClicked = async (e) => {
    e.preventDefault();

    let TempData = await DataObj.postData(
      FormData.name,
      FormData.email,
      FormData.password,
      FormData.termsAndConditions,
      FormData.job
    );
    console.log(TempData);
  };

  return (
    <form onSubmit={FormSubmitOnceClicked}>
      {metaData.map((inputItem, index) => (
        <div key={index}>
          <p>
            <label htmlFor={inputItem.inputName}>
              {inputItem.inputName}:
              <input
                name={inputItem.inputName}
                type={inputItem.inputType}
                value={FormData[inputItem.inputName]}
                onChange={FillFormWithData}
              />
            </label>
          </p>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ValidationForm;
