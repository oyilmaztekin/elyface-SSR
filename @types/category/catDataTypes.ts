type HaberGorsel = {
  _id: string;
};

export type Item = {
  _id: string;
  haber_metni: string;
  domain_id: string;
  title: string;
  meta_aciklama: string;
  description: string;
  url: string;
  haber_gorsel: [HaberGorsel];
};

type detailDataType = {
  count: number;
  items: [Item];
};

export interface CatDataTypes {
  _id: string;
  data: { [key: string]: detailDataType };
}

export interface ErrorResponse {
  response: {
    [key: string]: ErrorData;
  };
}
type Error = {
  message: string;
  code: string;
};

type ErrorData = {
  error: {
    [key: string]: Error;
  };
};

export interface ErrorResponse {
  response: {
    [key: string]: ErrorData;
  };
}
