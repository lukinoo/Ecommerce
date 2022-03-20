import allDrinksData from "../datas/allDrinks.json";
import bestSellersData from "../datas/bestsellers.json";
import bundleUpData from "../datas/bundleup.json";
import { ConfigFaq } from "../interfaces";

interface Config {
  id: number;
  url: string;
  title: string;
  price: number;
  quantity: number;
  faq?: ConfigFaq[];
}

export const fullData = (): Array<Config> => {
  return [...allDrinksData, ...bestSellersData, ...bundleUpData];
};
