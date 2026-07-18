import type { Metadata } from "next";
import { LpGallery } from "@/components/LpGallery";

export const metadata: Metadata = {
  title: "LP作品集",
  description:
    "学園祭・イベント・プロダクト・コーポレートなど、制作したLP/Webサイトの作品集。",
};

export default function LpWorksPage() {
  return <LpGallery />;
}
