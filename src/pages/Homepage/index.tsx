import { useSelector } from "react-redux";
import SignIn from "../../components/SignIn";
import "./styles.scss";

const mapState = ({ user }: any) => ({
  currentUser: user?.currentUser,
});

const Homepage = (props: any) => {
  const { currentUser } = useSelector(mapState);

  currentUser && <SignIn />;
  return <section className="homepage">Home page</section>;
};

export default Homepage;
