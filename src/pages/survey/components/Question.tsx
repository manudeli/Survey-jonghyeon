import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import {
  removeQuestion,
  editQuestionTitle,
  editQuestionDescription,
  editQuestionType,
} from "../surveySlice";
import { IQuestion } from "../../../utils/type";
import QuestionAnswerTypes from "./QuestionAnswerTypes";

function Question({ question, index }: { question: IQuestion; index: number }) {
  const dispatch = useDispatch();

  const handleRemoveQuestion = (): void => {
    dispatch(removeQuestion({ id: question.id }));
  };
  const handleQuestionTitleChange = (event: any): void => {
    dispatch(editQuestionTitle({ id: question.id, title: event.target.value }));
  };
  const handleQuestionDescriptionChange = (event: any): void => {
    dispatch(
      editQuestionDescription({
        id: question.id,
        description: event.target.value,
      })
    );
  };
  const handleTypeChange = (event: any) => {
    dispatch(editQuestionType({ id: question.id, type: event.target.value }));
  };

  return (
    <div className="card shadow">
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          style={{
            fontWeight: 700,
          }}
        >
          {`${index + 1}`}번 질문
        </Typography>

        <IconButton onClick={handleRemoveQuestion} size="small">
          <DeleteIcon />
        </IconButton>
      </div>
      <div style={{ flex: 1, marginTop: 16 }}>
        <TextField
          variant="outlined"
          placeholder="질문을 적어주세요"
          size="small"
          value={question.title}
          onChange={handleQuestionTitleChange}
          fullWidth
          multiline
          rows={3}
        />
        <TextField
          fullWidth
          placeholder="설명을 적어주세요"
          size="small"
          value={question.description}
          onChange={handleQuestionDescriptionChange}
          style={{ marginTop: 8 }}
        />
      </div>
      <FormControl className="mt-8">
        <Select
          className="mt-8"
          value={question.type}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          onChange={handleTypeChange}
        >
          <MenuItem value="singleSelect">단일 선택형</MenuItem>
          <MenuItem value="multiSelect">다중 선택형</MenuItem>
          <MenuItem value="shortAnswer">짧은 서술형</MenuItem>
          <MenuItem value="longAnswer">긴 서술형</MenuItem>
        </Select>
      </FormControl>
      <QuestionAnswerTypes
        questionId={question.id}
        type={question.type}
        answer={question.answer}
      />
    </div>
  );
}

export default Question;
