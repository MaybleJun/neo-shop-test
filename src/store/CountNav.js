import { createContext, useContext } from 'react';
import { observable, action, makeObservable } from 'mobx';

class CardStore {
  shopCards = [];

  constructor() {
    makeObservable(this, {
      shopCards: observable,
      addCard: action,
    });
  }

  addCard(card) {
    this.shopCards.push(card);
  }
}

const cardStore = new CardStore();

const StoreContext = createContext({
  CardStore: cardStore,
});

export const useStore = () => useContext(StoreContext);
