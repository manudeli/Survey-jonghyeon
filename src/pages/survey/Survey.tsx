import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";
import { Typography, TextField, IconButton, Button } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

import { State } from "../../utils/type";

import {
  editInformationTitle,
  editInformationSubtitle,
  createQuestion,
} from "./surveySlice";
import Question from "./components/Question";
import EmojiBook from "../../components/EmojiBook";

export default function Survey() {
  const dispatch = useDispatch();
  const state = useSelector((state: State) => state);
  const questions = useSelector((state: State) => state.questions);

  const handleInforamtionTitleChange = (event: any): void => {
    dispatch(
      editInformationTitle({
        title: event.target.value,
      })
    );
  };
  const handleInforamtionSubtitleChange = (event: any): void => {
    dispatch(
      editInformationSubtitle({
        subtitle: event.target.value,
      })
    );
  };
  const handleCreateQuestion = (): void => {
    dispatch(
      createQuestion({
        id: uuid(),
        title: "",
        description: "",
        type: "singleSelect",
        answer: [
          { text: "", isChecked: false },
          { text: "", isChecked: false },
        ],
      })
    );
  };

  return (
    <Fragment>
      <EmojiBook />

      <Typography
        variant="h4"
        style={{
          fontWeight: 700,
          margin: "80px 16px 16px 16px",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        📝 <br />
        설문지 작성
      </Typography>
      <div>
        <div style={{ padding: 30, maxWidth: 400, margin: "auto" }}>
          <TextField
            placeholder="설문지 제목을 적어주세요"
            fullWidth
            multiline
            onChange={handleInforamtionTitleChange}
          />
          <TextField
            className="mt-8"
            placeholder="설명을 적어주세요"
            fullWidth
            multiline
            onChange={handleInforamtionSubtitleChange}
            size="small"
          />
        </div>
        <div>
          {questions?.map((question: any, index: number) => (
            <Question question={question} key={index} index={index} />
          ))}

          <div style={{ textAlign: "center", marginTop: 16 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: questions?.length ? undefined : "center",
                alignItems: "center",
                height: questions?.length ? 300 : "20vh",
                padding: 16,
              }}
            >
              <IconButton
                onClick={handleCreateQuestion}
                aria-label="delete"
                className="icon-button--positive shadow"
              >
                <AddIcon className="icon" />
              </IconButton>
              <div style={{ color: "gray" }}>
                {questions?.length ? (
                  <>
                    <Typography
                      className="description mt-8"
                      variant="subtitle2"
                      style={{ color: "gray" }}
                    >
                      질문 추가하기
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      disableElevation
                      size="large"
                      style={{ borderRadius: 16, marginTop: 30 }}
                      onClick={() => {
                        console.log(state);
                        window.alert(JSON.stringify(state));
                      }}
                    >
                      설문지 제출하기 🎉
                    </Button>
                  </>
                ) : (
                  <Typography className="description mt-8" variant="subtitle2">
                    앗! 아직 질문이 없으시군요
                    <br /> 새로운 질문을 추가해보세요😀
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
