"use client";

import React from "react";
import { Box, Button, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import ImageLogin from "@images/login/login.jpg";
import Welcome from "@images/login/welcome.png";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <div className="relative">
        <Image
          src={ImageLogin}
          fill
          priority
          sizes="100%"
          alt="img"
          className="object-contain"
        />
      </div>
      <div className="flex justify-center items-center px-6 ">
        <div className=" p-4 rounded flex flex-col items-center justify-center text-center gap-2 max-w-[400px]">
          <Image src={Welcome} alt="Logo" width={40} height={40} />
          <Heading>
            {params.slug === "login" ? "¡Bienvenido!" : "Crea una cuenta"}
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
            eros quis odio venenatis sagittis.
          </Text>
          {
            params.slug === 'login' ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )
          }
        </div>
      </div>
    </div>
  );
};

export default page;
