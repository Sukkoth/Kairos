import * as yup from "yup";

const AddTaskSchema = yup.object().shape({
  startDate: yup.date().nullable().required("Start Date is required"),
  endDate: yup
    .date()
    .nullable()
    .required("End Date is required")
    .test("end-date", "End Date must be after Start Date", function (value) {
      const { startDate } = this.parent;
      return !startDate || (value && value >= startDate);
    }),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  categories: yup.array().required("Category is required").min(1),
});

export default AddTaskSchema;
