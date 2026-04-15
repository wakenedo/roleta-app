import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage } from "@/firebase";
import { SetStateAction } from "react";

const uploadTenantLogo = async (file: File, tenantId: string) => {
  if (!auth.currentUser) throw new Error("Not authenticated");

  const fileExt = file.name.split(".").pop();
  const storageRef = ref(storage, `tenants/${tenantId}/logo.${fileExt}`);

  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  return url;
};

const handleFile = ({
  e,
  setFile,
}: {
  e: React.ChangeEvent<HTMLInputElement>;
  setFile: (value: SetStateAction<File | null>) => void;
}) => {
  const selected = e.target.files?.[0];
  if (!selected) return;

  // optional validation
  if (selected.size > 1_000_000) {
    alert("Max 1MB");
    return;
  }

  setFile(selected);
};

export { uploadTenantLogo, handleFile };
