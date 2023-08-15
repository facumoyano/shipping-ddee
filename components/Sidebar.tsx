"use client";

import { Button, Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { client } from "@/supabase/client";
import userStore from "@/store/userStore";

interface SidebarItem {
  name: string;
  icon: string;
  link: string;
}

const sidebarItems: SidebarItem[] = [
  {
    name: "Crear embarcador",
    icon: "embarcador",
    link: "/embarcador",
  },
  {
    name: "Crear empresa",
    icon: "empresa",
    link: "/empresa",
  },
  {
    name: "Crear producto",
    icon: "producto",
    link: "/producto",
  },
  {
    name: "Crear packaging",
    icon: "packaging",
    link: "/packaging",
  },
  {
    name: "Crear NCM",
    icon: "ncm",
    link: "/ncm",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const userToken = userStore((state) => state.accessToken);
  const setAccessToken = userStore((state) => state.setAccessToken);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { error } = await client.auth.signOut();
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
      setAccessToken(null);
      router.push("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" bg-slate-950 text-white h-screen w-72 float-left p-4">
      <Heading weight="medium">Dashboard</Heading>
      <div>
        <ul className="mt-4">
          {sidebarItems.map((item) => (
            <li key={item.name} className="flex items-center space-x-2 py-1">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <Button className="mt-4" onClick={handleSubmit}>
          Cerrar sesión
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
