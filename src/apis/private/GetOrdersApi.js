import axios from "axios";

const GetOrdersApi = async (token) => {
  try {
    console.log("working 1");
    const response = await axios.get(process.env.REACT_APP_GETORDERS, {
      headers: {
        authorization: ` BEARER ${token}`,
      },
    });
    console.log("working 2");
    return response;
  } catch (e) {
    console.log("working 3");
    return e.response;
  }
};
export default GetOrdersApi;
