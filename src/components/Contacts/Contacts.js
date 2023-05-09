import PropTypes from 'prop-types';
import { IconSize } from 'components/constant';
import { ContactItem, ContactParagraph, TrashBtn } from './Contacts.styled';
import { FaTrashAlt } from 'react-icons/fa';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactParagraph>{name}</ContactParagraph>
            <ContactParagraph>{number}</ContactParagraph>
            <TrashBtn
              type="button"
              aria-label="delete"
              onClick={() => onDeleteContact(id)}
            >
              <FaTrashAlt size={IconSize.sm} />
            </TrashBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
