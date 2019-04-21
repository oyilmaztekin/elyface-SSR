import {
  Item,
  CatDataTypes
} from "./catDataTypes";

type CategoryReturnedObjects = {
  data: CatDataTypes;
  datacarousel: Object;
  seohaberleri: {
    [key: string]: Item;
  };
};

type CategoryReturnedDatasets = {
  data: string;
  seohaberleri: string;
};

export interface CategoryPropsInterface {
  registry: {
    [key: string]: CategoryReturnedObjects;
  };
  dataset: {
    [key: string]: CategoryReturnedDatasets;
  };
}
