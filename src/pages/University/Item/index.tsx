import { Universities } from "../../../models";
import "./styles.scss";

interface Props {
  item: Universities;
}

const UniversityItem = (props: Props) => {
  const { item } = props;

  return (
    <>
      <section className="university--item__section">
        <p> name: {item.name}</p>
        <p> country: {item.country}</p>
        {item.web_pages &&
          item.web_pages.map((x, i) => {
            return (
              <div key={x}>
                slot{i + 1}: {x}
                <iframe src={x} title={x}></iframe>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default UniversityItem;
