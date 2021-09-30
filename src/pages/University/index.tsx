import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import iconRefresh from '../../assets/icons/refresh.svg';
import Loading from '../../components/Loading';
import { Universities } from '../../models';
import { getAllUniversity, getUniversityByName } from '../../redux/University/university.actions';
import UniversityItem from './Item';
import './styles.scss';

const mapState = ({ university }: any) => ({
  listUniversity: university?.list as Universities[],
});

const University = (props: any) => {
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');
  const [isLoading, setShowLoading] = useState(true);
  const { listUniversity } = useSelector(mapState);

  useEffect(() => {
    getListUniversity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getListUniversity = () => {
    dispatch(
      getAllUniversity({
        onSuccess: () => {
          setShowLoading(false);
        },
        onError: () => {
          setShowLoading(false);
        },
      })
    );
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13 && valueSearch) {
      setShowLoading(true);
      dispatch(
        getUniversityByName({
          data: valueSearch,
          onSuccess: () => {
            setShowLoading(false);
          },
          onError: () => {
            setShowLoading(false);
          },
        })
      );
      return false;
    }
  };

  const onRefresh = () => {
    getListUniversity();
    setValueSearch('');
  };

  return (
    <>
      {isLoading && <Loading />}
      <section className="university__section">
        <div className="search-area">
          <input
            type="text"
            placeholder="Search name"
            value={valueSearch}
            onChange={(e) => setValueSearch(e.target.value)}
            onKeyDown={(e) => onKeyDownSearch(e)}
          />
        </div>
        {listUniversity.length === 0 && (
          <div className="list--empty">
            <p>List is empty</p>
            <img src={iconRefresh} alt="refresh" onClick={() => onRefresh()} />
          </div>
        )}
        <div className="list">
          {listUniversity &&
            listUniversity.map((item, i) => {
              return <UniversityItem key={i} item={item} />;
            })}
        </div>
      </section>
    </>
  );
};

export default University;
