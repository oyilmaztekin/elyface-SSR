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

export interface RegularDataTypes {
  _id: string;
  data: [detailDataType];
}

export interface MansetCokOkuanlarDataInterface {
  data: {
    [key: string]: {
      [key: string]: RegularDataTypes;
    };
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
