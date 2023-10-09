import { useDispatch } from 'react-redux';

import { changeFilter } from 'Redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <label>
      Find contact by name
      <input
        type="text"
        name="filter"
        // value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
