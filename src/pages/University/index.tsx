import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Universities } from "../../models";
import { getAllUniversity } from "../../redux/University/university.actions";
import UniversityItem from "./Item";
import "./styles.scss";

const mapState = ({ university }: any) => ({
  listUniversity: university?.list as Universities[],
});

const University = (props: any) => {
  const dispatch = useDispatch();
  const { listUniversity } = useSelector(mapState);

  useEffect(() => {
    dispatch(getAllUniversity());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="University">
      {listUniversity &&
        listUniversity.map((x, i) => {
          return <UniversityItem key={i} item={x} />;
        })}
    </section>
  );
};

export default University;
