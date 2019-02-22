import axios from "axios";
import { delivery } from "@apis";

export const getDataset = async (
  dataset,
  endpoint = delivery
) => {
  const { addr, domain_id, token } = endpoint;
  return axios({
    method: "get",
    url: `http://${addr}/api/domains/${domain_id}/datasets/${dataset}/result`,
    headers: {
      Authorization: token
    }
  });
};
