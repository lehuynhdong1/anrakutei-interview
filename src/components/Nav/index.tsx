import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import iconHome from '../../assets/icons/home.svg';
import iconLogout from '../../assets/icons/logout.svg';
import iconUniversity from '../../assets/icons/university.svg';
import { signOutUserStart } from '../../redux/User/user.actions';
import './styles.scss';

const mapState = ({ user }: any) => ({
  currentUser: user?.currentUser,
});

const Nav = (props: any) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    dispatch(signOutUserStart());
  };

  const router = [
    {
      id: 'home',
      src: iconHome,
      path: '/',
    },
    {
      id: 'university',
      src: iconUniversity,
      path: '/university',
    },
  ];

  return (
    <nav>
      <div className="content">
        <h1>Logo</h1>
        <div className="actions">
          {router &&
            router.map((item) => {
              return (
                <span key={item.id}>
                  <Link to={item.path}>
                    <img src={item.src} alt={item.id} />
                  </Link>
                </span>
              );
            })}
          {currentUser && (
            <span>
              <Link to="" onClick={(e) => signOut(e)}>
                <img src={iconLogout} alt="log_out" />
              </Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
