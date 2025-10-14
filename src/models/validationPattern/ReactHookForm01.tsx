import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Form } from "react-router";

type FormFields = {
  email: string;
  password: string;
  userName: string;
};

function ReactHookForm01() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      userName: "Afsar Tanvir",
    },
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("email", {
          /* required: "Email is required.",
          pattern: /^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, */
          validate: (value) => {
            if (!value.includes("@")) {
              return "Email must include @.";
            }
            return true;
          },
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && (
        <div className="text-red-500">{errors.email.message}</div>
      )}
      <br />
      <br />
      <Input
        {...register("password", {
          /* required: "Password is required.", */
          minLength: {
            value: 4,
            message: "Password must have at least 4 characters.",
          },
          validate: (value) => {
            if (value.length < 4 || value.length > 32) {
              return "Afsar Tanvir";
            }
            return true;
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <div className="text-red-500">{errors.password.message}</div>
      )}
      <br />
      <br />
      <Input
        {...register("userName", {})}
        type="text"
        placeholder="User Name"
      />
      {errors.userName && (
        <div className="text-red-500">{errors.userName.message}</div>
      )}
      {errors.root && <div className="text-red-500">{errors.root.message}</div>}

      <br />
      <br />
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </Button>
    </Form>
  );
}

export default ReactHookForm01;
