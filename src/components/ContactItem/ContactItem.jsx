import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ onDelete, name, number }) => {
  return (
    <div className={css.item}>
      <p>{name}:</p>
      <div className={css.equal}>
        <p>{number}</p>
        <button className={css.delete} type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

ContactItem.propTypes = {
  onDelete: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
