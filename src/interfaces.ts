export interface ConfigBestsellers {
  id: number;
  url: string;
  title: string;
  price: number;
  quantity: number;
}

export interface ConfigBundleup {
  id: number;
  url: string;
  title: string;
  price: number;
  quantity: number;
}

export interface ConfigFaq {
  id: number;
  question: string;
  answer: string;
  active: boolean;
}

export interface ConfigAllDrinks {
  id: number;
  url: string;
  title: string;
  price: number;
  quantity: number;
  faq: ConfigFaq[];
}

export interface ConfigRecipes {
  id: number;
  url: string;
  title: string;
  paragraph: string;
}

export interface ConfigKeepItGreen {
  id: number;
  url: string;
  title: string;
  paragraph: string;
}

export interface ContextState {
  id: number;
  url: string;
  title: string;
  price: number;
  quantity: number;
  faq: ConfigFaq[];
}

export type ContextType = {
  items: ContextState[];
  animation: boolean;
  navBar: boolean;
  addToCart: (item: ContextState) => void;
  deleteToCart: (idx: number) => void;
  navBarHandler: (state: boolean) => void;
};
