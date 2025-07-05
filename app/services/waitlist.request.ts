import axios from "axios";

interface WaitListRequestBody {
  fullname: string;
  phone_number: string;
  email: string;
  user_type: string;
  country: string;
}

//MAKE A WaitList (Send WaitList to Admin)
export const WaitListRequest = async (body: WaitListRequestBody) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASEURL}/account/join-waitlist/`,
      body,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = response.data;
    console.log(data, "data is here");
    if (!data) return;
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
