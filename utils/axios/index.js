import axios from "axios";
import { delivery, preview } from "@apis";

function detectEndpoint(endpoint) {
  if (endpoint === "preview") {
    return preview;
  }
  return delivery;
}

export const getDataset = async (
  dataset,
  endpoint
) => {
  endpoint = detectEndpoint(endpoint);
  const { addr, domain_id, token } = endpoint;
  return axios({
    method: "get",
    url: `http://${addr}/api/domains/${domain_id}/datasets/${dataset}/result`,
    headers: {
      Authorization: token
    }
  });
};

export const getContent = async (
  content,
  endpoint
) => {
  endpoint = detectEndpoint(endpoint);
  const { addr, domain_id, token } = endpoint;
  return axios({
    method: "get",
    url: `http://${addr}/api/domains/${domain_id}/contents/${content}`,
    headers: {
      Authorization: token
    }
  });
};
