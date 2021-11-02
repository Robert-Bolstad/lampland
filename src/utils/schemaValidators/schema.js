import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter the name of the product")
    .min(4, "The name must be at least 4 characters"),

  price: yup
    .number()
    .typeError("Please enter the price")
    .min(1, "Minimum price 1$"),

  description: yup
    .string()
    .required("Please enter an description of the product")
    .min(50, "The description must be at least 50 characters"),

  category: yup
    .string()
    .oneOf(
      ["ceilingLamps", "wallLamps", "tableLamps", "floorLamps"],
      "Please select select an lamp category"
    )
    .required("Please select your lamp category"),
});
