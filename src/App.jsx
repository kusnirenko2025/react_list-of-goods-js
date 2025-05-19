import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);
  const [sortType, setSortType] = useState('default');
  const [isReversed, setIsReversed] = useState(false);

  const sortAlphabetical = () => {
    const sorted = [...goodsFromServer].sort();

    setGoods(isReversed ? [...sorted].reverse() : sorted);
    setSortType('alphabet');
  };

  const sortByLength = () => {
    const sorted = [...goodsFromServer].sort((a, b) => a.length - b.length);

    setGoods(isReversed ? [...sorted].reverse() : sorted);
    setSortType('length');
  };

  const reverseGoods = () => {
    const reversed = [...goods].reverse();

    setGoods(reversed);
    setIsReversed(!isReversed);
  };

  const resetGoods = () => {
    setGoods([...goodsFromServer]);
    setSortType('default');
    setIsReversed(false);
  };

  const isOriginalOrder =
    !isReversed &&
    goods.every((item, index) => item === goodsFromServer[index]);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortType === 'alphabet' ? '' : 'is-light'}`}
          onClick={sortAlphabetical}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${sortType === 'length' ? '' : 'is-light'}`}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${isReversed ? '' : 'is-light'}`}
          onClick={reverseGoods}
        >
          Reverse
        </button>

        {!isOriginalOrder && (
          <button
            type="button"
            className="button is-danger"
            onClick={resetGoods}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
