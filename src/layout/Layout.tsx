type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
