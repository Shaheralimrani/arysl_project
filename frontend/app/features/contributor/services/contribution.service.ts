import { ContributionFormData } from "../types/Contribution.types";

export async function submitContribution(
  data: ContributionFormData
) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const formData = new FormData();

  formData.append("class_name", data.className);
  formData.append("description", data.description);
  formData.append("dialect", data.dialect);

  data.files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch(
    `${apiUrl}/api/v1/contributions`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    const error = await response.json().catch(() => null);

    throw new Error(
      error?.detail || "تعذر إرسال المساهمة، حاول مرة أخرى."
    );
  }

  return response.json();
}