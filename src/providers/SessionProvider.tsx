type SessionProviderProps = {
  children: JSX.Element;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  //componente que se debería emplear para comprobar la sessión del usuario
  //sin embargo a no estar un back real conectado a la aplicación y por lo tanto una sessión abierta
  //solo creo la definición del componente

  return <>{children}</>;
};

export default SessionProvider;
