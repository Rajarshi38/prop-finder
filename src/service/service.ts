export const fetchAllProperties = async () => {
  const response = await fetch(
    "https://reunion-api-xq0y.onrender.com/api"
  ).then((res) => res.json());
  return response.payload.properties;
};
