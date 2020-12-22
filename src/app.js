import 'chart.js';
import './helpers/chart.helper';
import { generateGlobalCasesContainer, generateCountriesList, generateCountiesList } from './assets/modules/List/GenerateList';
import { generateCountriesTable } from './assets/modules/Table/GenerateTable';
import { generateSearchInput } from './assets/modules/Search/LiveSearch';
import './style.css';

import generateMap from './map/map';

generateMap('.map-container');
