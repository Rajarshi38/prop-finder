import { config } from "../config";
import { routes } from "../constants/routes";
import axios from "axios";
import { PropertyType } from "../interfaces";

const baseUrl = config.api_url;

export const fetchAllProperties = async (queryParams?: {
  location: string;
  type: PropertyType;
  priceStart: number;
  priceEnd: number;
  availableDate: Date;
}) => {
  const url = new URL(baseUrl + routes.list_properties);
  if (queryParams) {
    if (queryParams.location) {
      url.searchParams.set("location", queryParams.location);
    }
    if (queryParams.type) {
      url.searchParams.set("type", queryParams.type);
    }
    if (queryParams.priceStart) {
      url.searchParams.set("priceStart", queryParams.priceStart.toString());
    }
    if (queryParams.priceEnd) {
      url.searchParams.set("priceEnd", queryParams.priceEnd.toString());
    }
    if (queryParams.availableDate) {
      url.searchParams.set(
        "availableDate",
        queryParams.availableDate.toString()
      );
    }
  }
  const response = await fetch(url).then((res) => res.json());
  return response.payload.properties;
};

export const loginUser = async (body: { email: string; password: string }) => {
  const url = new URL(baseUrl + routes.login);
  const response = await axios
    .post(url.toString(), body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return response.user;
};

export const registerUser = async (body: {
  name: string;
  email: string;
  password: string;
}) => {
  const url = new URL(baseUrl + routes.signup);
  const response = await axios
    .post(url.toString(), body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data);

  return response.user;
};

export const logoutUser = async () => {
  const url = new URL(baseUrl + routes.logout);
  await axios.post(
    url.toString(),
    {},
    {
      withCredentials: true,
    }
  );
};
