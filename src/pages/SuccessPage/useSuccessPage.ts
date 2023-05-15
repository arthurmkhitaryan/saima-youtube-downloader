import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const downloadFile = useCallback((fileUrl: string, id: string) => {
    var tempLink = document.createElement('a');
    tempLink.href = fileUrl;
    tempLink.setAttribute('download', `video-${id}`);
    tempLink.click();
  }, [])

  return {
    
  }
}
