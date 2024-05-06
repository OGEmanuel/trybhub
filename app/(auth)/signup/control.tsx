"use client";

import { usePageStore } from "@/store/PageStore";
import AuthCard from "../AuthCard";
import SignupForm from "./SignupForm";
import VerifyEmail from "./VerifyEmail";
import CreatePassword from "./CreatePassword";

const Control = () => {
  const { currPage } = usePageStore();

  return (
    <>
      {currPage === 0 && (
        <AuthCard header="Create an account" className="gap-[2.125rem]">
          <SignupForm />
        </AuthCard>
      )}
      {currPage === 1 && (
        <AuthCard header="Check your email" className="gap-2">
          <VerifyEmail />
        </AuthCard>
      )}
      {currPage === 2 && (
        <AuthCard header="Create your Password" className="gap-[2.125rem]">
          <CreatePassword />
        </AuthCard>
      )}
    </>
  );
};

export default Control;
