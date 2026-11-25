import type { ReactNode } from "react";
import { Header, Footer } from "@/components/Site";
import { BudgetForm } from "@/components/BudgetForm";
import { CustomerReviews } from "@/components/CustomerReviews";

export function PageShell({ children, message }: { children: ReactNode; message: string }) {
  return <>
    <Header message={message}/>
    {children}
    <CustomerReviews/>
    <BudgetForm/>
    <Footer message={message}/>
  </>;
}
