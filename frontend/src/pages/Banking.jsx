import React from "react";
import { useForm } from "react-hook-form";
export default function Banking() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => fetch("/bank/api/banking/", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(data)
  }).then(r=>r.json()).then(console.log);
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{padding:20}}>
      <h2>Banking</h2>
      <input placeholder="Account Name" {...register("account_name")} /><br/>
      <input placeholder="Account #" {...register("account_number")} /><br/>
      <input placeholder="Routing #" {...register("routing_number")} /><br/>
      <input type="number" step="0.01" placeholder="Min Payout" {...register("min_payout")} /><br/>
      <button type="submit">Save</button>
    </form>
  );
}
