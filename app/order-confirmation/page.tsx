import { Suspense } from "react";
import { OrderConfirmationView } from "@/components/OrderConfirmationView";

export default function OrderConfirmationPage() {
  return <Suspense fallback={<div className="confirmation-page"><p>Loading your confirmation…</p></div>}><OrderConfirmationView /></Suspense>;
}
