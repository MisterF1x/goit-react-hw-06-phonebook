import { FaPhoneAlt, FaUserAlt } from 'react-icons/fa';
import { IconSize } from '../constant';
import {
  BtnSubmit,
  ErrorMsg,
  FormPhonebook,
  Input,
  Label,
} from './Form.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

const validationSchema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string()
    .min(12, 'Phone number must be at least 12 digits')
    .required('Phone number is required'),
});

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const hasName = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (hasName) return window.alert(`${name} is allready in contacts`);
    dispatch(addContact(contact));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormPhonebook>
        <Label>
          <FaUserAlt size={IconSize.sm} />
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <ErrorMessage component={ErrorMsg} name="name" />
        <Label>
          <FaPhoneAlt size={IconSize.sm} />
          <Input
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ErrorMessage component={ErrorMsg} name="number" />
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </FormPhonebook>
    </Formik>
  );
};
