import React from 'react'
import './Contacts.css'

interface Contact {
    id:number;
    firstName: string;
    lastName: string;
    phone: string;
    gender?: 'male' | 'female';
  }
  
  interface ContactsProps {
    initialContacts: Contact[];
  }

export const Contacts:React.FC<ContactsProps> = ({ initialContacts }) => {
    return (
        <div className='contact__box'>
            {initialContacts.map((contact) => (
                <ul key={contact.id} className="contact__list">
                    <hr style={{ border: '1px solid grey' }} />
                    <li className='contact__name'>{contact.firstName} {contact.lastName}</li>
                    <li className='contact__phone'>{contact.phone}</li>
                    <li className='contact__gender'>{contact.gender}</li>
                </ul>
            ))}
        </div>
    )
}