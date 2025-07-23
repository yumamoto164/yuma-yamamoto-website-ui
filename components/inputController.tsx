import { Input } from "@heroui/input";
import { Controller } from "react-hook-form";

export const InputController = ({
  control,
  name,
  type,
}: {
  control: any;
  name: string;
  type?: string;
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input
          value={value}
          type={type}
          onChange={onChange}
          style={{
            textAlign: "center",
          }}
        />
      )}
    />
  );
};
