import React from "react";
import { useForm } from "react-hook-form";
export default function CreateAccount() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log("Create:", data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{padding:20}}>
      <h2>Create Admin</h2>
      <input placeholder="Username" {...register("username")} /><br/>
      <input type="password" placeholder="Password" {...register("password")} /><br/>
      <button type="submit">Create</button>
    </form>
  );
}
