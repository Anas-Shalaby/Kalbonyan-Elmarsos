import icons from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';

import View from './View.js';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find your recipe. Please try another one';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(e => {
      window.addEventListener(e, handler);
    });
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo);
    });
  }

  _generateMerkupIngr(ing) {
    return `
    <li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${icons}#icon-check"></use>
    </svg>
    <div class="recipe__quantity">${
      ing.quantity ? new Fraction(ing.quantity).toString() : ''
    }</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ing.unit}</span>
      ${ing.description}
    </div>
  </li>`;
  }
}
export default new RecipeView();
