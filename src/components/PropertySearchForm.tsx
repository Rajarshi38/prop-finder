import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import styled from "@emotion/styled";
import { locations, propertyTypes } from "../constants";
import { css } from "@emotion/react";

type PropertySearchValues = {
  location: string;
  date: Date;
  propertyType: string;
  priceRange: number[];
};

const PropertySearchForm = () => {
  const { register, control, handleSubmit, watch } =
    useForm<PropertySearchValues>({
      defaultValues: {
        priceRange: [0, 30],
        location: "",
        propertyType: "",
      },
    });

  const priceRange = watch("priceRange");
  const startingPrice = priceRange[0] * 600;
  const endPrice = priceRange[1] * 600;

  const onSubmit: SubmitHandler<PropertySearchValues> = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <Select id="location" defaultValue="" {...register("location")}>
            <Option value="">Select a location</Option>
            {locations.map((location) => (
              <Option key={location.id} value={location.name}>
                {location.name.toUpperCase()}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Property Type</FormLabel>
          <Select id="propertyType" {...register("propertyType")}>
            <Option value="">Select property Type</Option>
            {propertyTypes.map((propertyType) => (
              <Option key={propertyType.id} value={propertyType.type}>
                {propertyType.type.toUpperCase()}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Price Range</FormLabel>
          <Controller
            control={control}
            name="priceRange"
            render={({ field }) => (
              <RangeSlider
                aria-label={["min", "max"]}
                defaultValue={[0, 30]}
                step={2}
                colorScheme="teal"
                value={field.value}
                onChange={(value) => field.onChange(value)}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
            )}
          />
          <FormHelperText color="gray.400">
            Starting price - {startingPrice} and ending price - {endPrice}
          </FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Available Date</FormLabel>
          <InputGroup>
            <Input
              type="date"
              {...register("date")}
              css={css`
                ::-webkit-calendar-picker-indicator {
                  background: url("/Calendar.svg");
                  color: white;
                }
              `}
            />
          </InputGroup>
        </FormControl>

        <Button type="submit" alignSelf={"flex-end"} colorScheme="teal">
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
