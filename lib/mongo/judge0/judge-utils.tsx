import { compileCode, checkStatus } from "./api";


export interface Language {
  id: number;
  name: string;
  label: string;
  value: string;
}

const handleCompile = async (language: Language, code:any, setProcessing: (processing:boolean) => void, setOutputDetails: (outputDetails:any) => void) => {
  
    setProcessing(true);
    try {
      const response = await compileCode(language.id, code);
      const token = response;
      checkCompileStatus(token, setProcessing, setOutputDetails);
    } catch (error: unknown) {
      setProcessing(false);
    }
  };

  const checkCompileStatus = async (token: string, setProcessing: (processing:boolean) => void, setOutputDetails: (outputDetails:any) => void) => {
    try {
      const response = await checkStatus(token);
      const statusId = response.status?.id;

      if (statusId === 1 || statusId === 2) {
        setTimeout(() => {
          checkCompileStatus(token, setProcessing, setOutputDetails);
        }, 2000);
      } else {
        setProcessing(false);
        setOutputDetails(response);
      }
    } catch (error: unknown) {
      setProcessing(false);
    }
  };

  export {handleCompile, checkCompileStatus}