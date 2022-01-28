import axios from "axios";

const CreateProductApi = async (body, token) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_PRODUCTCREATEAPI,
      body,
      {
        headers: {
          authorization: `BEARER ${token}`,
        },
      }
    );
    console.log(response, " res from createProduct");
    return response;
  } catch (e) {
    return e.response;
  }
};

export default CreateProductApi;
