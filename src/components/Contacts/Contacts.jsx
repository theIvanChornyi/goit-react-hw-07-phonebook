import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FiDelete, FiPhone } from 'react-icons/fi';
import { BiBadge, BiBadgeCheck } from 'react-icons/bi';
import { Buttons, ContactItem, ItemButton, Itemlink } from './Contacts.styled';

import { getFiltredUsers } from 'redux/filter';
import { fetchContacts, deleteContact, toogleFavorite } from 'redux/contacts';

export const Contacts = () => {
  const dispatch = useDispatch();

  const arr = useSelector(state => getFiltredUsers(state));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = e => {
    dispatch(deleteContact(e.currentTarget.dataset.id));
  };
  return (
    <ul>
      {arr.map(({ id, name, phone, favorite }) => (
        <ContactItem key={id}>
          <div>
            <span>{name}: </span>
            <span>{phone}</span>
          </div>

          <Buttons>
            <ItemButton
              color={'gold'}
              onClick={() =>
                dispatch(
                  toogleFavorite({ id, name, phone, favorite: !favorite })
                )
              }
            >
              {favorite ? <BiBadgeCheck /> : <BiBadge />}
            </ItemButton>

            <Itemlink href={`tel: ${phone}`} color={'green'}>
              <FiPhone />
            </Itemlink>

            <ItemButton
              type="button"
              data-id={id}
              onClick={handleDeleteContact}
            >
              <FiDelete />
            </ItemButton>
          </Buttons>
        </ContactItem>
      ))}
    </ul>
  );
};
