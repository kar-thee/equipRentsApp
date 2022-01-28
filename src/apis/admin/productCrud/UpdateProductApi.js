import axios from "axios";

const UpdateProductApi = async (id, token) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_PRODUCTUPDATE}/${id}`,
      {
        headers: {
          authorization: `BEARER ${token}`,
        },
      }
    );

    return response;
  } catch (e) {
    return e.response;
  }
};

export default UpdateProductApi;
