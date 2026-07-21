import type { Metadata } from "next";
import { WebGallery } from "@/components/WebGallery";

export const metadata: Metadata = {
  title: "Web作品集",
  description:
    "学園祭・イベント・プロダクト・アーティスト・コーポレートなど、制作したWebサイト/LPの作品集。",
};

export default function WebWorksPage() {
  return <WebGallery />;
}
