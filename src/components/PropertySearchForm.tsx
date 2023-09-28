import {
  Button,
  FormControl,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { locations, propertyTypes } from "../constants";

type PropertySearchValues = {
  location: string;
  date: Date;
  propertyType: string;
  priceRange: number;
};

const PropertySearchForm = () => {
  const { register } = useForm<PropertySearchValues>();

  return (
    <form>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
          xl: 3,
        }}
        spacing={6}
        alignItems={"center"}
      >
        <FormControl>
          <FormLabel>Location</FormLabel>
          <Select id="location" {...register("location")}>
            <Option selected value="">
              Select a location
            </Option>
            {locations.map((location) => (
              <Option key={location.id} value={location.name}>
                {location.name}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Property Type</FormLabel>
          <Select id="propertyType" {...register("propertyType")}>
            <Option selected value="">
              Select property Type
            </Option>
            {propertyTypes.map((propertyType) => (
              <Option key={propertyType.id} value={propertyType.type}>
                {propertyType.type}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Price Range</FormLabel>
          <RangeSlider
            aria-label={["min", "max"]}
            defaultValue={[0, 30]}
            // min={10}
            // max={30}
            step={10}
            onChange={(value) => console.log(value)}
            colorScheme="teal"
            // {...register("priceRange")}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        </FormControl>
        <FormControl>
          <FormLabel>Available Date</FormLabel>
          <Input type="date" {...register("date")} />
        </FormControl>

        <Button alignSelf={"flex-end"} colorScheme="teal">
          Apply
        </Button>
      </SimpleGrid>
    </form>
  );
};

export default PropertySearchForm;

const Option = styled.option`
  background: #0f172a !important;
`;
