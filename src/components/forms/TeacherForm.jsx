import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InputField from "../InputField";
import "./TeacherForm.css";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

const TeacherForm = ({ type, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="teacher-form" onSubmit={onSubmit}>
      <h1 className="form-title">Create a new teacher</h1>
      <span className="form-section-title">Authentication Information</span>
      <div className="form-group">
        <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors?.username} />
        <InputField label="Email" name="email" defaultValue={data?.email} register={register} error={errors?.email} />
        <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />
      </div>
      <span className="form-section-title">Personal Information</span>
      <div className="form-group">
        <InputField label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors.firstName} />
        <InputField label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors.lastName} />
        <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
        <InputField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} />
        <InputField label="Blood Type" name="bloodType" defaultValue={data?.bloodType} register={register} error={errors.bloodType} />
        <InputField label="Birthday" name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors.birthday} />
        <div className="form-input-group">
          <label className="form-label">Sex</label>
          <select className="form-select" {...register("sex")} defaultValue={data?.sex}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && <p className="form-error">{errors.sex.message}</p>}
        </div>
        <div className="form-input-group">
          <label htmlFor="img" className="form-label clickable">
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="form-file-input" />
          {errors.img?.message && <p className="form-error">{errors.img.message}</p>}
        </div>
      </div>
      <button className="form-button">{type === "create" ? "Create" : "Update"}</button>
    </form>
  );
};

export default TeacherForm;
