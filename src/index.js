import changeCards from './modules/change-cards'
import changeTheme from './modules/change-theme'
import filters from './modules/filters'
import search from './modules/search'

import filterMovies from './modules/movies-filter'
import filterCitizenship from './modules/citizenship-filter'

import { getData } from './modules/getData'
import { renderData } from './modules/render'

getData('./db/dbHeroes.json').then(data => renderData(data));

changeCards()
changeTheme()
filters()
search()

filterMovies()
filterCitizenship()