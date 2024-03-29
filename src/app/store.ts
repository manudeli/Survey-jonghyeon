import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import {
  informationReducer,
  questionsReducer,
} from "../pages/survey/surveySlice";

const reducer = {
  information: informationReducer,
  questions: questionsReducer,
};

export const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
