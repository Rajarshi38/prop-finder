import { Property } from "../interfaces";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

interface PropertyCardProps {
  property: Property;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card>
      <CardBody display="flex" flexDir="column">
        <div>
          <Image
            src={property.propertyImage}
            fallbackSrc="https://placehold.co/400"
          />
        </div>
        <div>
          <div>
            <Text>
              {property.rent}/
              <Text>
                {property.rentType === "per-month" ? "month" : "year"}
              </Text>
            </Text>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyCard;
