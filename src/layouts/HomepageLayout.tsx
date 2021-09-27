import Footer from '../components/Footer';
import Header from '../components/Header';

const HomepageLayout = (props: any) => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
