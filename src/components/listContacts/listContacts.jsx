import React from 'react';
import { ListElement, DeleteBtn } from './listContacts.styled';

export default function ListContact({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListElement key={id}>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => removeContact(id)}>
          Delete
        </DeleteBtn>
      </ListElement>
    );
  });
  return <ul>{elements}</ul>;
}
