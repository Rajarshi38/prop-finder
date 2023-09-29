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
import { useAtom } from "jotai";
import { filterAtom } from "../store/propertyAtom";

type PropertySearchValues = {
  location: string;
  date: string;
  propertyType: string;
  priceRange: number[];
};

const capitalize = (word: string) => {
  return word[0].toUpperCase() + word.slice(1);
};

const PropertySearchForm = () => {
  const { register, control, handleSubmit, watch, reset } =
    useForm<PropertySearchValues>({
      defaultValues: {
        priceRange: [0, 30],
        location: "",
        propertyType: "",
      },
    });

  const [filters, setFilters] = useAtom(filterAtom);

  const priceRange = watch("priceRange");
  const startingPrice = priceRange[0] * 600;
  const endPrice = priceRange[1] * 600;

  const onSubmit: SubmitHandler<PropertySearchValues> = async (values) => {
    const { location, priceRange, propertyType, date } = values;
    const [priceStart, priceEnd] = priceRange;
    const map = new Map();
    if (location) {
      map.set("location", capitalize(location));
    }
    if (priceStart) {
      map.set("priceStart", priceStart);
    }
    if (priceEnd) {
      map.set("priceENd", priceEnd);
    }
    if (propertyType) {
      map.set("type", propertyType.toLowerCase());
    }
    if (date) {
      map.set("availableDate", date);
    }

    const queryParams = Object.fromEntries(map);
    setFilters(queryParams);
  };

  const handleReset = () => {
    reset();
    setFilters(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onReset={handleReset}>
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
        {filters && (
          <Button type="reset" alignSelf="flex-end" colorScheme="blue">
            Reset
          </Button>
        )}
      </SimpleGrid>
    </form>
  );
};

export default PropertySearchForm;

const Option = styled.option`
  background: #0f172a !important;
`;
