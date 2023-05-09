import PropTypes from 'prop-types';
import { IconSize } from 'components/constant';
import {
  FilterBtn,
  FilterGroupBlock,
  FilterInput,
  FilterLabel,
  FilterSpan,
} from './Filter.styled';
import { FaRegWindowClose } from 'react-icons/fa';

export const ContactsFilter = ({ value, onChange, onClick }) => {
  return (
    <form>
      <FilterGroupBlock>
        <FilterLabel>
          <FilterSpan>Find contacts by name</FilterSpan>
          <FilterInput type="text" value={value} onChange={onChange} />
        </FilterLabel>
        <FilterBtn onClick={onClick}>
          <FaRegWindowClose size={IconSize.sm} />
        </FilterBtn>
      </FilterGroupBlock>
    </form>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
