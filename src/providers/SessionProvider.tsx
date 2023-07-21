type SessionProviderProps = {
  children: JSX.Element;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  return <>{children}</>;
};

export default SessionProvider;
