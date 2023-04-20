import React from 'react';
import { useForm } from 'react-hook-form';

export default function Input() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => alert(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   <label>Имя:   <input type="text" placeholder="Имя" {...register("Имя", {required: true, maxLength: 80, pattern: /Имя/i})} /> </label>
      <input type="text" placeholder="Домашнее животное" {...register("Домашнее животное", {required: true, max: 80, min: 3, maxLength: 100, pattern: /Собака-хаски/i})} />
      <input type="tel" placeholder="Ваш телефон" {...register("Ваш телефон", {required: true, maxLength: 12})} />
      <input type="datetime" placeholder="Дата и время" {...register("Дата и время", {required: true})} />
      <input type="text" placeholder="Откуда" {...register("Откуда", {required: true, pattern: /Ростов-на-Дону/i})} />
      <input type="text" placeholder="Куда" {...register("Куда", {required: true})} />

      <input type="submit" />
    </form>
  );
}