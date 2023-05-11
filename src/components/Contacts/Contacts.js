import { IconSize } from 'components/constant';
import { ContactItem, ContactParagraph, TrashBtn } from './Contacts.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const getVisibleContact = () => {
    const normalizedContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };
  const filteredSortedContacts = getVisibleContact().sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  );
  return (
    <ul>
      {filteredSortedContacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactParagraph>{name}</ContactParagraph>
            <ContactParagraph>{number}</ContactParagraph>
            <TrashBtn
              type="button"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              <FaTrashAlt size={IconSize.sm} />
            </TrashBtn>
          </ContactItem>
        );
      })}
    </ul>
  );
};
