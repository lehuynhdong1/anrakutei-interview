import { Universities } from '../../../models';
import './styles.scss';

interface Props {
  item: Universities;
}

const UniversityItem = (props: Props) => {
  const { item } = props;

  return (
    <>
      <section className="university--item__section">
        {item.name && (
          <>
            <span className="item-field-key">Name:</span>
            <span className="item-field-value">{item.name}</span>
          </>
        )}
        {item.country && (
          <>
            <span className="item-field-key">Country:</span>
            <span className="item-field-value">{item.country}</span>
          </>
        )}
        {item.web_pages &&
          item.web_pages.map((item, i) => {
            return (
              <>
                <span className="item-field-key">Domain {i + 1}:</span>
                <span className="item-field-value">{item}</span>
              </>
            );
          })}
      </section>
    </>
  );
};

export default UniversityItem;
