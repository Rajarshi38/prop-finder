import { config } from "../config";
import { routes } from "../constants/routes";

const baseUrl = config.api_url;

export const fetchAllProperties = async () => {
  const url = new URL(baseUrl + routes.list_properties);
  const response = await fetch(url).then((res) => res.json());
  return response.payload.properties;
};
