import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@cspaglu/ui/components/ui/form";
import { Input } from "@cspaglu/ui/components/ui/input";
import { ReactNode } from "react";
import { ReactHookForm } from "@cspaglu/ui/lib/index";

interface FormInputProps<T extends ReactHookForm.FieldValues> {
  control: any;
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  render?: (field: any) => ReactNode;
}

export function FormInput<T extends ReactHookForm.FieldValues>({
  control,
  name,
  label,
  placeholder,
  description,
  required = false,
  render,
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </FormLabel>
          <FormControl>
            {render ? (
              render(field)
            ) : (
              <Input placeholder={placeholder} {...field} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
