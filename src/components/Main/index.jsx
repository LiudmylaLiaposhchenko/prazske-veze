import React, { useState } from 'react';
import './style.css';
import { useTranslation } from 'react-i18next';
import { Card } from '../Card';
import { towers } from '../../towers';

export const Main = () => {
  const { t, i18n } = useTranslation();
  const [sort, setSort] = useState('recommend');

  const towersCopy = Array.from(towers);
  const towersSorted =
    sort === 'recommend'
      ? towersCopy
      : towersCopy.sort((a, b) => {
          if (sort === 'highest') {
            return b.height - a.height;
          }
          if (sort === 'oldest') {
            return a.century - b.century;
          }
        });

  return (
    <>
      <section id="sort-panel" className="sort-panel">
        <div className="sort-buttons">
          <button
            className={
              sort === 'recommend'
                ? 'sort-button sort-button--active'
                : 'sort-button'
            }
            onClick={() => {
              setSort('recommend');
            }}
          >
            Rekomendace
          </button>
          <button
            className={
              sort === 'oldest'
                ? 'sort-button sort-button--active'
                : 'sort-button'
            }
            onClick={() => {
              setSort('oldest');
            }}
          >
            Od nejstarší
          </button>
          <button
            className={
              sort === 'highest'
                ? 'sort-button sort-button--active'
                : 'sort-button'
            }
            onClick={() => {
              setSort('highest');
            }}
          >
            Od nejvyšší
          </button>
          <button
            className={
              sort === 'nearest'
                ? 'sort-button sort-button--active'
                : 'sort-button'
            }
            onClick={() => {
              setSort('nearest');
            }}
          >
            {' '}
            Od nejbližší
          </button>
        </div>
        <a href="#header">Nahoru ↑</a>
      </section>
      <main className="cards-container">
        {towersSorted.map((tower) => (
          <Card
            id={tower.id}
            key={tower.name}
            photo={tower.photo}
            name={t(tower.name)}
            description={t(tower.description)}
            price={tower.price}
            location={t(tower.location)}
            constructionCentury={t(tower.constructionCentury)}
          />
        ))}
      </main>
    </>
  );
};
