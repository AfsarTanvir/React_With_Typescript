import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Errors = {
  email?: string;
  password?: string;
};

type Touched = {
  email?: boolean;
  password?: boolean;
};

function LoginFormBasicValidation() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});

  // Validation logic
  const validate = () => {
    const newErrors: Errors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = validate();
    setErrors(newErrors);

    // Only submit if no errors
    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Form is valid!", { email, password });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Validation Check</CardTitle>
      </CardHeader>

      <CardContent className="flex justify-around text-center">
        <form onSubmit={handleSubmit}>
          <div className="m-3">
            <Input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                setTouched((prev) => ({ ...prev, email: true }));
                setErrors(validate());
              }}
            />
            {touched.email && errors.email && (
              <span className="error">{errors.email}</span>
            )}
          </div>
          <div className="m-3">
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
            />
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <Button type="submit">Login</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginFormBasicValidation;
