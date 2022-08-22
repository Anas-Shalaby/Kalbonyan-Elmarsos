import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';

// if (module.hot) {
//   module.hot.accept();
// }

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();
    // Loading recipe
    await model.loadRecipe(id);
    // Rendring recipe
    recipeView.render(model.state.recipe);

    resultsView.update(model.getSearchResultsPage());
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async () => {
  try {
    resultsView.renderSpinner();
    // Get search querry
    const query = searchView.getQuery();
    if (!query) return;
    // load search results
    await model.loadSearchResults(query);

    // render result
    // resultsView.render(model.state.search.results);
    resultsView.render(model.getSearchResultsPage(1));

    // Render pagination buttons

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = gotoPage => {
  // resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPage(gotoPage));

  // Render pagination buttons

  paginationView.render(model.state.search);
};

const controlServings = newServings => {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // update the view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const init = () => {
  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();
