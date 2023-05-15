import { useCallback, useState } from "react";
import { addLink } from "../../lib/controller";
import { useNavigate } from "react-router-dom";

export const useMainPage = () => {
  const [url, setUrl] = useState<string>('');
  const navigate = useNavigate();
  const [newLink, setNewLink] = useState<string>("")
  const [validLink, setValidLink] = useState<boolean>(true)

  const handleInputLink = useCallback(async () => {
    if (url && url.includes('youtube')) {
      setValidLink(true);
      const newLinkId = await addLink({
        initialLink: url
      });
      if (newLinkId) {
        setNewLink(`${window.location.origin}/${newLinkId}`)
      }
    } else if (url && url.includes('coursera')) {
      setValidLink(true);
      const newLinkId = await addLink({
        initialLink: url
      });
      if (newLinkId) {
        setNewLink(`${window.location.origin}/${newLinkId}`)
      }
    } else {
      setValidLink(false);
    }
  }, [url])

  return {
    url,
    setUrl,
    newLink,
    navigate,
    validLink,
    handleInputLink
  };
}