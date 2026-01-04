import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
function EpmForm({ onSubmit, initialData }) {
  const { register, reset, handleSubmit } = useForm();

  useEffect(() => {
    if (initialData) {
      reset({
        Name: initialData.Name || "",
        RollNo: initialData.RollNo || "",
        Address: initialData.Address || "",
      });
    }
  }, [initialData, reset]);
  const onSubmitHandler = (data) => {
    const payload = {
      Name: data.Name,
      RollNo: data.RollNo,
      Address: data.Address,
    };
    onSubmit(payload);
    reset({
      Name: "",
      RollNo: "",
      Address: "",
    });
  };
  return (
    <div>
      EpmForm
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input {...register("Name")} payload="Enter The Name" />
        <input {...register("RollNo")} placeholder="Enter Roll Number" />
        <input {...register("Address")} placeholder="Enter Your Address" />
        <button type="submit">
          {initialData ? "Update" : "Create"} Information
        </button>
      </form>
    </div>
  );
}

export default EpmForm;
