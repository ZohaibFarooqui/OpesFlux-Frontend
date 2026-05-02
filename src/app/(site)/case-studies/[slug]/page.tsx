import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function CaseStudyPage({ params }: Props) {
  // Placeholder — real case studies pending customer onboarding
  const { slug } = await params;
  if (slug) notFound();
  return null;
}
