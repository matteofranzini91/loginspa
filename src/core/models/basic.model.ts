export type TypeWithKey<T> = {[key:string] : T}

export type FatherComponentDTO = {
  children: JSX.Element;
}

export type LoginFormComponentDTO = {
  setLoginPanelView: React.Dispatch<React.SetStateAction<TypeWithKey<boolean>>>;
}

export type NotificationDTO = {
  open: boolean;
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
}