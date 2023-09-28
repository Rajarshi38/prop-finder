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
    <div>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
          lg: 3,
        }}
      >
        {properties.map((property) => {
          return <PropertyCard key={property._id} property={property} />;
        })}
      </SimpleGrid>
    </div>
  );
};

export default PropertyLists;
