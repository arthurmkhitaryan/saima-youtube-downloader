import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useDownloadLink = (id: string | undefined) => {
  const serverURL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();

  const handleDownloadYoutube = useCallback(async (url: string) => {
    const response = await axios.post(`${serverURL}/api/download-youtube`, { url }, { responseType: 'blob', headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type'
    } });
    const downloadUrl = window.URL.createObjectURL(response.data);
    if (downloadUrl) {
      navigate('/success', { state: { url: downloadUrl, id } })
    }
  }, [id, navigate, serverURL])

  const handleDownloadCoursera = useCallback(async (url: string) => {
    const responseURL = await axios.post(`${serverURL}/api/download-coursera`, { url }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept, X-PINGOTHER, Content-Type'
      } });
    const res = await fetch(`${responseURL}`);
    const blob = await res.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    navigate('/success', { state: { url: downloadUrl, id } })
  }, [id, navigate, serverURL])

  return { handleDownloadYoutube, handleDownloadCoursera };
}