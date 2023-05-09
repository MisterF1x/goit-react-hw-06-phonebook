import PropTypes from 'prop-types';
import { useState } from 'react';
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

const validationSchema = yup.object().shape({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup
    .string()
    .min(12, 'Phone number must be at least 12 digits')
    .required('Phone number is required'),
});

export const ContactForm = ({ onSubmit }) => {
  const [name] = useState('');
  const [number] = useState('');
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };
  return (
    <Formik
      initialValues={{ name, number }}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
