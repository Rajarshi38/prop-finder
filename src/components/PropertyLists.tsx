import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { useAtom } from "jotai";
import { lodableProperties } from "../store/propertyAtom";

const PropertyLists = () => {
  const [response] = useAtom(lodableProperties);
  if (response.state === "loading") {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }
  return (
    response.state === "hasData" && (
      <>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={4}
        >
          {response.data.map((property) => {
            return <PropertyCard key={property._id} property={property} />;
          })}
        </SimpleGrid>
      </>
    )
  );
};

export default PropertyLists;
