import * as Yup from "yup";

export const modalAddTransactionsSchema = Yup.object().shape({
  typeOfTransaction: Yup.string(),
  category: Yup.string().when("toggle", {
    is: (toggle) => toggle === false,
    then: () => Yup.string().required("Required"),
  }),
  amountOfTransaction: Yup.number().required("Required"),
  transactionDateShort: Yup.string().required("Required"),
  comment: Yup.string().max(45),
});
