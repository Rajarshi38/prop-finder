import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchAllProperties } from "../service/service";
import { Property } from "../interfaces";
import PropertyCard from "./PropertyCard";

const PropertyLists = () => {
  const [properties, setAllProperties] = useState<Property[]>([]);

  useEffect(() => {
    (async () => {
      const properties = await fetchAllProperties();
      setAllProperties(properties);
    })();
  }, []);

  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
        spacing={4}
      >
        {properties.map((property) => {
          return <PropertyCard key={property._id} property={property} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default PropertyLists;
