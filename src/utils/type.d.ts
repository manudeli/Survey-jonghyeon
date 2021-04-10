export interface IInformation {
  title: string;
  subtitle: string;
}

export interface IQuestion {
  id: string;
  title: string;
  description: string;
  type: string;
  answer: any | string;
}

export interface State {
  title: string;
  subtitle: string;
  questions: null | IQuestion[];
}
