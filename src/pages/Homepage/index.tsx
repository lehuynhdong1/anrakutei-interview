import { Redirect } from 'react-router-dom';
import './styles.scss';

const Homepage = (props: any) => {
  return (
    <section className="homepage">
      <h1>This is Home page</h1>
      <Redirect to="/university" />
    </section>
  );
};

export default Homepage;
