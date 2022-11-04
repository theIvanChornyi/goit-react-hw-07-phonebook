import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/contacts';

import { Formik, Form } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

import { schema } from './validationSchema';
import { FormInput, FormLabel } from './FormInput';
import { Box } from 'components/Box';
import { AddBtn, FavBox } from './PhonebookForm.styled';
import { addContact } from 'redux/contacts/contactsOperatons';

export const PhonebookForm = () => {
  const contacts = useSelector(state => getAllContacts(state));
  const toastName = useRef(null);
  const toastNumber = useRef(null);
  const dispatch = useDispatch();

  const checkUniqContactName = name => {
    const isIncludes = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    return isIncludes;
  };

  const handleSubmit = ({ name, number, favorite }, { resetForm }) => {
    if (checkUniqContactName(name)) {
      toast.error(`${name} is already in contacts`, {
        autoClose: false,
      });
    } else {
      resetForm();
      const newContact = {
        name: name.trim(),
        phone: number.trim(),
        favorite,
      };
      toast.dismiss();
      dispatch(addContact(newContact));
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '', favorite: false }}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnBlur={true}
        validateOnChange={false}
        validateOnMount={false}
      >
        {({ errors, touched, isValidating, values }) => {
          toastsLogic(
            errors,
            touched,
            isValidating,
            values,
            toastName,
            toastNumber
          );

          return (
            <Box autoComplete="off" pt={2} position="relative" as={Form}>
              <FormInput inputType="text" formName="name" />
              <FormInput inputType="tel" formName="number" />
              <Box
                htmlFor={'favorite'}
                display="flex"
                alignItems="baseline"
                justifyContent="center"
                mb={4}
                as="label"
              >
                <FormLabel>Add to favorite</FormLabel>
                <FavBox type="checkbox" name="favorite" id={'favorite'} />
              </Box>
              <AddBtn type="submit">Add contact</AddBtn>
            </Box>
          );
        }}
      </Formik>
      <ToastContainer limit={2} position="top-left" />
    </>
  );
};

function toastsLogic(
  errors,
  touched,
  isValidating,
  values,
  toastName,
  toastNumber
) {
  if (
    !isValidating &&
    touched.name &&
    !toast.isActive(toastName.current) &&
    values.name !== ''
  ) {
    toastName.current = toast.warn(errors?.name, {
      autoClose: false,
    });
  } else if (!errors?.name) {
    toast.dismiss(toastName.current);
  }

  if (
    !isValidating &&
    touched.number &&
    !toast.isActive(toastNumber.current) &&
    values.number !== ''
  ) {
    toastNumber.current = toast.warn(errors?.number, {
      autoClose: false,
    });
  } else if (!errors?.number) {
    toast.dismiss(toastNumber.current);
  }
}
