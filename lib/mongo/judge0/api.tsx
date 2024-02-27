import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

export const compileCode = async (languageId: number, code: string) => {
  const formData = {
    language_id: languageId,
    source_code: btoa(code), // encode source code in base64
  };

  const options = {
    method: "POST",
    url: process.env.NEXT_PUBLIC_RAPID_API_URL,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "content-type": "application/json",
      "Content-Type": "application/json",
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
    data: formData,
  };

  try {
    const response = await axios.request(options);

    return response.data.token;
  } catch (error: unknown) {
    throw new Error("Failed to compile code");
  }
};

export const checkStatus = async (token: string) => {
  const options = {
    method: "GET",
    url: process.env.NEXT_PUBLIC_RAPID_API_URL + "/" + token,
    params: { base64_encoded: "true", fields: "*" },
    headers: {
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error: unknown) {
    throw new Error("Failed to check status");
  }
};
