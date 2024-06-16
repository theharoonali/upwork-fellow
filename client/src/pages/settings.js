import React, { useState } from "react";
import Button from "../components/button";
import Span from "../components/span";

function Settings({ onClick }) {
  const [formData, setFormData] = useState({
    api: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log(formData);
    onClick();
  };

  const isSubmitDisabled = formData.api === "";

  return (
    <>
      <div className="main-section">
        <div className="sub-main-section">
          <input
            type="text"
            name="api"
            placeholder="API KEY*"
            value={formData.api}
            onChange={(e) => handleChange(e)}
          />
          <span
            style={{
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              cursor:'pointer'
            }}
          >
            <Span text={"Click here to see OpenAI API Docs."} />
          </span>
        </div>
        <div>
          <Button
            text="Save"
            onClick={handleSubmit}
            disable={isSubmitDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default Settings;