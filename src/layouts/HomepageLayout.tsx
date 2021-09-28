import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const mapState = ({ user }: any) => ({
  currentUser: user?.currentUser,
});

const HomepageLayout = (props: any) => {
  const { currentUser } = useSelector(mapState);
  return (
    <>
      {/* // TODO: React router connect check Auth */}
      {currentUser === null && <Redirect to={{ pathname: "/login" }} />}
      <div className="fullHeight">
        <Header {...props} />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default HomepageLayout;
