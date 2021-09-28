import "./styles.scss";

const Nav = (props: any) => {
  return (
    <nav>
      <ul>
        <li>
          <p>Home</p>
        </li>
        <li>
          <p className="active">University</p>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
