import {
  createSlice,
  PayloadAction,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

import { IInformation, IQuestion } from "../../utils/type";

// Information Slice
const informationInitialState: IInformation = { title: "", subtitle: "" };
const informationSlice = createSlice({
  name: "information",
  initialState: informationInitialState,
  reducers: {
    editTitle: (state, { payload }: PayloadAction<{ title: string }>) => {
      state.title = payload.title;
    },
    editSubtitle: (state, { payload }: PayloadAction<{ subtitle: string }>) => {
      state.subtitle = payload.subtitle;
    },
  },
});

// Question Slice
const questionsInitialState: IQuestion[] = [];
const questionsSlice = createSlice({
  name: "questions",
  initialState: questionsInitialState,
  reducers: {
    create: {
      reducer: (state, { payload }: PayloadAction<IQuestion>) => {
        state.push(payload);
      },
      prepare: ({ id, title, description, type, answer }: IQuestion) => ({
        payload: {
          id,
          title,
          description,
          type,
          answer,
        },
      }),
    },

    editTitle: (
      state,
      { payload }: PayloadAction<{ id: string; title: string }>
    ) => {
      const questionToEdit = state.find(
        (question) => question.id === payload.id
      );
      if (questionToEdit) {
        questionToEdit.title = payload.title;
      }
    },

    editDescription: (
      state,
      { payload }: PayloadAction<{ id: string; description: string }>
    ) => {
      const questionToEdit = state.find(
        (question) => question.id === payload.id
      );
      if (questionToEdit) {
        questionToEdit.description = payload.description;
      }
    },

    remove: (state, { payload }: PayloadAction<{ id: string }>) => {
      const index = state.findIndex((question) => question.id === payload.id);
      state.splice(index, 1);
    },

    editType: (
      state,
      { payload }: PayloadAction<{ id: string; type: string }>
    ) => {
      const questionToEdit = state.find(
        (question) => question.id === payload.id
      );
      if (questionToEdit) {
        questionToEdit.type = payload.type;
        if (
          questionToEdit.type === "singleSelect" ||
          questionToEdit.type === "multiSelect"
        ) {
          questionToEdit.answer = [
            { text: "", isChecked: false },
            { text: "", isChecked: false },
          ];
        } else if (
          questionToEdit.type === "shortAnswer" ||
          questionToEdit.type === "shortAnswer"
        ) {
          questionToEdit.answer = { text: "" };
        }
      }
    },

    editTextChoiceSelect: (
      state,
      {
        payload,
      }: PayloadAction<{ questionId: string; value: string; index: number }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      answerOnQuestionToEdit[payload.index].text = payload.value;
    },

    createChoiceSelect: (
      state,
      { payload }: PayloadAction<{ questionId: string }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      answerOnQuestionToEdit.push({ text: "", isChecked: false });
    },

    removeChoiceSelect: (
      state,
      { payload }: PayloadAction<{ questionId: string; index: number }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      answerOnQuestionToEdit.splice(payload.index, 1);
    },

    setIsCheckedSingleSelect: (
      state,
      { payload }: PayloadAction<{ questionId: string; value: number }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      answerOnQuestionToEdit.forEach(
        (choice: any) => (choice.isChecked = false)
      );
      answerOnQuestionToEdit[payload.value].isChecked = true;
    },

    setIsCheckedMultiSelect: (
      state,
      { payload }: PayloadAction<{ questionId: string; value: number }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      const isChecked = answerOnQuestionToEdit[payload.value].isChecked;
      answerOnQuestionToEdit[payload.value].isChecked = !isChecked;
    },

    editTextOnAnswer: (
      state,
      { payload }: PayloadAction<{ questionId: string; text: string }>
    ) => {
      const answerOnQuestionToEdit = state.find(
        (question) => question.id === payload.questionId
      )?.answer;
      answerOnQuestionToEdit.text = payload.text;
    },
  },
});

// Actions
export const {
  editTitle: editInformationTitle,
  editSubtitle: editInformationSubtitle,
} = informationSlice.actions;
export const {
  create: createQuestion,
  editTitle: editQuestionTitle,
  editDescription: editQuestionDescription,
  remove: removeQuestion,
  editType: editQuestionType,
  editTextChoiceSelect,
  createChoiceSelect,
  removeChoiceSelect,
  setIsCheckedSingleSelect,
  setIsCheckedMultiSelect,
  editTextOnAnswer,
} = questionsSlice.actions;

// Reducers
export const informationReducer = informationSlice.reducer;
export const questionsReducer = questionsSlice.reducer;
