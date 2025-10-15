import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Form } from "react-router";
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password should be at least 6 length"),
  userName: z.string().min(4),
});
type FormFieldsZod = z.infer<typeof schema>;

function ReactHookForm02_withZod() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFieldsZod>({
    defaultValues: {
      userName: "Afsar Tanvir",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFieldsZod> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "This email is already taken",
      });
      setError("root", {
        message: "This is root error can't be fixed.",
      });
      console.log("ReactHookForm01: onSubmit, " + error);
    }
  };
  return (
    <div className="max-w-fit m-5 p-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("email")} type="text" placeholder="Email" />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <br />
        <br />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <br />
        <br />
        <Input {...register("userName")} type="text" placeholder="User Name" />
        {errors.userName && (
          <div className="text-red-500">{errors.userName.message}</div>
        )}
        {errors.root && (
          <div className="text-red-500">{errors.root.message}</div>
        )}

        <br />
        <br />
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </Button>
      </Form>
    </div>
  );
}

export default ReactHookForm02_withZod;
