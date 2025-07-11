import { redirect } from "next/navigation";

export default function PL({ params }) {
  const lang = params["lang"];

  if (lang === "js") {
    redirect("/languages/js/what-is-javascript");
  }

  return null;
}
