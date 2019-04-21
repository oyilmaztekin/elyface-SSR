import { Item } from "../responseDataTypes";

type indexReturnedObjects = {
  surmanset: {
    [key: string]: Item;
  };
  manset: Object;
  sagmanset: {
    [key: string]: Item;
  };
  mansetalti: {
    [key: string]: Item;
  };
  cokokunanlar: {
    [key: string]: Item;
  };
  gundem: {
    [key: string]: Item;
  };
  ekonomi: {
    [key: string]: Item;
  };
  siyaset: {
    [key: string]: Item;
  };
  yasam: {
    [key: string]: Item;
  };
  teknoloji: {
    [key: string]: Item;
  };
  dunya: {
    [key: string]: Item;
  };
  seohaberleri: {
    [key: string]: Item;
  };
  egitim: {
    [key: string]: Item;
  };
  saglik: {
    [key: string]: Item;
  };
  magazin: {
    [key: string]: Item;
  };
  galeri: {
    [key: string]: Item;
  };
};

type indexReturnedDatasets = {
  surmanset: string;
  manset: string;
  sagmanset: string;
  mansetalti: string;
  cokokunanlar: string;
  gundem: string;
  ekonomi: string;
  siyaset: string;
  yasam: string;
  teknoloji: string;
  dunya: string;
  seohaberleri: string;
  egitim: string;
  saglik: string;
  magazin: string;
  galeri: string;
};

export interface IndexPropsInterface {
  registry: {
    [key: string]: indexReturnedObjects;
  };
  dataset: {
    [key: string]: indexReturnedDatasets;
  };
}
