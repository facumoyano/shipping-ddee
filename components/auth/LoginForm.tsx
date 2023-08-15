"use client";

import React, { useState } from "react";
import Form from "../Form";
import Input from "../Input";
import { Button } from "@radix-ui/themes";
import { client } from "../../supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import userStore from "@/store/userStore";

const LoginForm = () => {
  const router = useRouter();

  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const setUserStore = userStore((state) => state.setAccessToken);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data, error } = await client.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      if (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      toast.success("Inicio de sesión exitoso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setUserStore(data?.session.access_token);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(updatedUser);
  };

  return (
    <Form customClass="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="email">Email:</label>
        <Input
          type="email"
          id="email"
          name="email"
          required={true}
          onChange={handleUserChange}
          value={user.email}
        />
      </div>
      <div className="flex flex-col items-start gap-1">
        <label htmlFor="password">Contraseña:</label>
        <Input
          type="password"
          id="password"
          name="password"
          required={true}
          onChange={handleUserChange}
          value={user.password}
        />
      </div>
      <Button type="submit" size="3">
        Enviar
      </Button>
    </Form>
  );
};

export default LoginForm;
