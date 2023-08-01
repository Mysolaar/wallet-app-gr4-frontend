import * as Yup from "yup";

export const modalAddTransactionsSchema = Yup.object().shape({
  typeOfTransaction: Yup.string(),
  category: Yup.string().when("typeOfTransaction", {
    is: (typeOfTransaction) => typeOfTransaction === "Expense",
    then: () => Yup.string().required("Required"),
  }),
  amountOfTransaction: Yup.string().required("Required"),
  transactionDate: Yup.string().required("Required"),
  comment: Yup.string().max(45),
});
