import { Bars3BottomLeftIcon, CheckBadgeIcon, HomeIcon } from "../icons/Icons";
import { Property } from "../interfaces";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

interface PropertyCardProps {
  property: Property;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card variant="elevated" bg="gray.700">
      <Image
        src={property.propertyImage}
        fallbackSrc="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
        borderTopRadius={"md"}
      />
      <CardBody display="flex" flexDir="column" gap="2" color="white" py={3}>
        <div>
          <Text fontWeight="semibold">
            <Text color="teal.400" as="span">
              &#8377;{property.rent}/
            </Text>
            <Text as="span" fontSize="sm" color="gray.300">
              {property.rentType === "per-month" ? "month" : "year"}
            </Text>
          </Text>
        </div>
        <div>
          <Box borderBottom={"1px"} pb="8px">
            <Text fontWeight="semibold">{property.propertyName}</Text>
            <Text textColor="gray.500">{property.location}</Text>
          </Box>
        </div>
      </CardBody>
      <CardFooter pt={0} pb={3} color="white">
        <HStack>
          <HStack>
            <Icon as={HomeIcon} />
            <Text>{property.numberOfBedrooms} beds</Text>
          </HStack>
          <HStack>
            <Icon as={CheckBadgeIcon} />
            <Text>{property.numberOfBathrooms} bathrooms</Text>
          </HStack>
          <HStack>
            <Icon as={Bars3BottomLeftIcon} />
            <Text>
              {property.length} * {property.breadth} m<sup>2</sup>
            </Text>
          </HStack>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
