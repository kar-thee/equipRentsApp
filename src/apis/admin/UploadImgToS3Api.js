import axios from "axios";

const UploadImgToS3Api = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response;
  } catch (e) {
    return e.response;
  }
};

export default UploadImgToS3Api;
