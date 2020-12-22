import 'chart.js';

import './charts/helpers/chart.helper';

import { generateGlobalCasesContainer, generateCountriesList, generateCountiesList } from './assets/modules/List/GenerateList';
import { generateCountriesTable } from './assets/modules/Table/GenerateTable';
import { generateSearchInput } from './assets/modules/Search/LiveSearch';
import { generateLastUpdateDate } from './assets/modules/Additional_content/LastUpdateDate';
import { generateTitle } from './assets/modules/Additional_content/Title';
import { generateFooter } from './assets/modules/Additional_content/footer';
import './style.css';

import generateMap from './map/map';
import appendFullScreenIco from './charts/chartFullScreen';

generateMap('.map-container');
