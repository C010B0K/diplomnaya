import React from "react";
import ReactDOM from "react-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { Button } from "./button";

const UniversalInput = ({
  control,
  name,
  placeholder,
  label,
  defaultValue,
  rules,
  errors,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          placeholder={placeholder}
          error={!!errors[name]}
          helperText={errors[name]?.message}
          {...rest}
        />
      )}
    />
  );
};

export const Input = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-[15px]">
      <div className="grid grid-cols-3 gap-3 lg:grid-cols-2 mb-[15px]">
        <UniversalInput
          control={control}
          name="name"
          label="Имя"
          placeholder="Иван"
          defaultValue=""
          rules={{ required: "Имя не корректно" }}
          errors={errors}
        />

        <UniversalInput
          control={control}
          name="animal"
          label="Ваш питомец"
          placeholder="Хаски"
          defaultValue=""
          rules={{
            required: "Ваш питомец "}}
          errors={errors}
        />

        <UniversalInput
          control={control}
          name="date"
          label="Дата"
          placeholder="31.12.2022"
          defaultValue=""
          rules={{
            required: "Дата не корректна",
            pattern: {
              value: /^(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})$/,
              message: "invalid date format",
            },
          }}
          errors={errors}
        />

        <UniversalInput
          control={control}
          name="phone"
          label="Телефон"
          placeholder="89999999999"
          defaultValue=""
          rules={{ required: "Телефон не корректен" }}
          errors={errors}
        />

        <UniversalInput
          control={control}
          name="whereFrom"
          label="Откуда"
          placeholder="Ростов-на-Дону"
          defaultValue=""
          rules={{ required: "Название не корректно" }}
          errors={errors}
        />

        <UniversalInput
          control={control}
          name="where"
          label="Куда"
          placeholder="Москва"
          defaultValue=""
          rules={{ required: "Название не корректно" }}
          errors={errors}
        />
      </div>
      <Button type="submit" name="Подтвердить" />
    </form>
  );
};
