import React from "react";
import ChoiceSingleSelect from "./ChoiceSingleSelect";
import ChoiceMultiSelect from "./ChoiceMultiSelect";
import { IconButton, TextField } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import { createChoiceSelect, editTextOnAnswer } from "../surveySlice";

function QuestionAnswerTypes({
  questionId,
  type,
  answer,
}: {
  questionId: string;
  type: string;
  answer: any;
}) {
  const dispatch = useDispatch();

  const handleNewChoiceSingleSelect = () => {
    dispatch(
      createChoiceSelect({
        questionId,
      })
    );
  };

  const handleTextFieldChange = (event: any) => {
    dispatch(
      editTextOnAnswer({ questionId: questionId, text: event.target.value })
    );
  };

  return (
    <div style={{ marginTop: 16 }}>
      {type === "singleSelect" ? (
        <>
          {answer.map((choice: any, index: number) => {
            return (
              <ChoiceSingleSelect
                questionId={questionId}
                choice={choice}
                index={index}
                key={index}
              />
            );
          })}
          <div style={{ textAlign: "center" }}>
            <IconButton
              className="icon-button--positive shadow mt-8"
              size="small"
              onClick={handleNewChoiceSingleSelect}
            >
              <AddIcon className="icon" color="primary" />
            </IconButton>
          </div>
        </>
      ) : type === "multiSelect" ? (
        <>
          {answer.map((choice: any, index: number) => {
            return (
              <ChoiceMultiSelect
                questionId={questionId}
                choice={choice}
                index={index}
                key={index}
              />
            );
          })}
          <div style={{ textAlign: "center" }}>
            <IconButton
              className="icon-button--positive shadow mt-8"
              size="small"
              onClick={handleNewChoiceSingleSelect}
            >
              <AddIcon className="icon" color="primary" />
            </IconButton>
          </div>
        </>
      ) : type === "shortAnswer" ? (
        <TextField
          placeholder="짧은 답변 예시를 적어주세요"
          variant="outlined"
          fullWidth
          onChange={handleTextFieldChange}
          value={answer.text}
        />
      ) : (
        type === "longAnswer" && (
          <TextField
            placeholder="긴 답변 예시를 적어주세요"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            onChange={handleTextFieldChange}
            value={answer.text}
          />
        )
      )}
    </div>
  );
}

export default QuestionAnswerTypes;
