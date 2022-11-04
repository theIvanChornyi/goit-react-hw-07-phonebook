import { FormLabel } from 'components/PhonebookForm/FormInput';
import { Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getUsersQuery, handleFilter } from 'redux/filter';

export const Filter = () => {
  const query = useSelector(state => getUsersQuery(state));
  const dispatch = useDispatch();

  const onInputChange = e =>
    dispatch(handleFilter(e.target.value.toLowerCase()));

  return (
    <label>
      <FormLabel>Find contacts by name</FormLabel>
      <Input
        type="text"
        name="filter"
        value={query}
        onChange={onInputChange}
      ></Input>
    </label>
  );
};
