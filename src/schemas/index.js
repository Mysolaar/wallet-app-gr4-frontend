import * as Yup from "yup";

export const modalAddTransactionsSchema = Yup.object().shape({
  toggle: Yup.boolean(),
  category: Yup.string().when("toggle", {
    is: (toggle) => toggle === false,
    then: () => Yup.string().required("Required"),
  }),
  price: Yup.string().required("Required"),
  date: Yup.string().required("Required"),
  comment: Yup.string().max(70),
});
