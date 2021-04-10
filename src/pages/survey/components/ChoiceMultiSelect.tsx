import React from "react";
import { Checkbox, TextField, IconButton } from "@material-ui/core";
import { Remove as RemoveIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import {
  setIsCheckedMultiSelect,
  editTextChoiceSelect,
  removeChoiceSelect,
} from "../surveySlice";

function ChoiceMultiSelect({
  questionId,
  choice,
  index,
}: {
  questionId: string;
  choice: any;
  index: number;
}) {
  const dispatch = useDispatch();

  const handleRadioChange = (event: any) => {
    dispatch(
      setIsCheckedMultiSelect({
        questionId,
        value: event.target.value,
      })
    );
  };

  const handleTextChange = (event: any) => {
    dispatch(
      editTextChoiceSelect({
        questionId,
        value: event.target.value,
        index,
      })
    );
  };

  const handleNewChoiceClick = () => {
    dispatch(
      removeChoiceSelect({
        questionId,
        index,
      })
    );
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handleNewChoiceClick}
        className="icon-button--negative shadow"
        aria-label="delete"
        size="small"
      >
        <RemoveIcon className="icon" fontSize="small" />
      </IconButton>{" "}
      <Checkbox
        color="default"
        checked={choice.isChecked}
        onChange={handleRadioChange}
        value={index}
        name="radio-button-demo"
      />
      <TextField
        size="small"
        placeholder="선택지를 적어주세요"
        fullWidth
        multiline
        value={choice.text}
        onChange={handleTextChange}
      />
    </div>
  );
}

export default ChoiceMultiSelect;
