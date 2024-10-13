import React, { useEffect, useState } from "react";
import './Phone.css'

import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Article } from "./Article/Article"
import { Section } from "./Section/Section"
import { CheckBox } from "./CheckBox/CheckBox"
import { Contacts } from "./Contacts/Contacts"

import '@fortawesome/fontawesome-free/css/all.min.css';

interface Contact {
    id:number;
    firstName: string;
    lastName: string;
    phone: string;
    gender?: 'male' | 'female';
}

interface Filters {
    searchTerm: string;
    male: boolean;
    female: boolean;
    unknown: boolean;
}

export const Phone: React.FC = () => {
    const contacts: Contact[] = [
        {   
            id:1,
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            id:2,
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            id:3,
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            id:4,
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            id:5,
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            id:6,
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }];

    const [filters, setFilters] = useState<Filters>({
        searchTerm: '',
        male: false,
        female: false,
        unknown: false
    })

    const [filteredContacts, setFilteredContacts] = useState<Contact[]>(contacts);

    const filterContacts = (filters: Filters) => {
        const filtered = contacts.filter(contact => {
            const matchesGender =
                (filters.male && contact.gender === 'male') ||
                (filters.female && contact.gender === 'female') ||
                (filters.unknown && !contact.gender) ||
                (!filters.male && !filters.female && !filters.unknown);

            const matchesTerm =
                contact.firstName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                contact.lastName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                contact.phone.includes(filters.searchTerm);

            return matchesGender && matchesTerm;
        });

        setFilteredContacts(filtered);
    };

    useEffect(() => {
        filterContacts(filters);
    }, [filters]);

    const handleSearch = (value: string) => {
        setFilters(prev => ({ ...prev, searchTerm: value }));
    };

    const handleGenderChange = (gender: keyof Filters, value: boolean) => {
        setFilters(prev => ({ ...prev, [gender]: value }));
    };

    return (
        <div className="App">
            <Header contents={{
                time: '19:45'
            }} />
            <Section contents={{
                list: '< Списки',
                add: '+',
                cont: 'Контакти'
            }} />
            <Article onSearch={handleSearch} />
            <CheckBox onGenderChange={handleGenderChange} />
            <Contacts initialContacts={filteredContacts} />
            <Footer />
        </div>
    );
}