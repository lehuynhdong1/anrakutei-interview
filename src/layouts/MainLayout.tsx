const MainLayout = (props: any) => {
  return (
    <div>
      <div className="main">{props.children}</div>
    </div>
  );
};

export default MainLayout;
