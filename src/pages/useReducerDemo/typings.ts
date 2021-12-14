export interface ICount {
  count: number;
}
export interface IState {
  count: number;
}
export interface IAction {
  type: string;
  payload: number ; // |符号值的是类型有可能为ICount 也有可能为 number;
}

export interface ILState {
  name?: string;
  pwd?: string;
  isLoading?: boolean;
  error?: string;
  isLoggedIn?: boolean;
}

export interface ILAction {
  type: string;
  payload?: ILState;
}
