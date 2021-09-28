import { useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/User/user.actions";
import Nav from "../Nav";
import "./styles.scss";

const mapState = ({ user }: any) => ({
  currentUser: user?.currentUser,
});

const Header = (props: any) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <Nav />
      {currentUser && <button onClick={() => signOut()}>Sign Out</button>}
    </header>
  );
};

export default Header;
