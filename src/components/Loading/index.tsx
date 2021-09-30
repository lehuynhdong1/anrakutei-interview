import iconLoading from '../../assets/icons/loading.svg';
import './styles.scss';

const Loading = (props: any) => {
  return (
    <section className="loading__section">
      <img src={iconLoading} alt="loading" />
    </section>
  );
};

export default Loading;
