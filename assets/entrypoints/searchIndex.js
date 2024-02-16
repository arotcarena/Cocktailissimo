
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SearchIndex } from '../Components/Search/SearchIndex';
import '../styles/Search/index.css';
import { configureLanguage } from '../functions/language/configureLanguage';

configureLanguage();


const searchIndex = document.getElementById('search-index');

const searchIndexRoot = createRoot(searchIndex);
searchIndexRoot.render(
    <SearchIndex />
);