import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { WaitListRequest } from "@/app/services/waitlist.request";
import countries from "react-phone-number-input/locale/en.json";
import CustomButton from "@/app/components/CustomButton";
import { AnimatePresence, motion } from "framer-motion";
import ReactSelect from "@/app/components/ReactSelect";
import { Controller, useForm } from "react-hook-form";
import InputField from "@/app/components/InputField";
import { activityData } from "@/app/utils/homeData";
import { Country } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { State } from "country-state-city";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface WaitListProps {
  setShowWaitListForm: Dispatch<SetStateAction<boolean>>;
  setShowSuccessMessage: Dispatch<SetStateAction<boolean>>;
  showWaitListForm: boolean;
}
interface UserType {
  id: number;
  label: string;
  value: string;
}

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  country: string;
  state: string;
  city: string;
  userType: UserType;
}

interface SelectOption {
  label: string;
  value: string | number;
}

export default function WaitList({
  setShowWaitListForm,
  showWaitListForm,
  setShowSuccessMessage,
}: WaitListProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [states, setStates] = useState<{ label: string; value: string }[]>([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState<string>("NG"); // Default to Nigeria

  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // REACT HOOK FORM LOGIC
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<FormData>();

  // Define the allowed countries
  const allowedCountries: Country[] = ["NG", "GH", "ZA"];

  // Fetch states based on selected country
  useEffect(() => {
    if (selectedCountryCode) {
      const countryStates = State.getStatesOfCountry(selectedCountryCode).map(
        (state) => ({
          label: state.name,
          value: state.isoCode,
        })
      );
      setStates(countryStates);
    }
  }, [selectedCountryCode, setValue]);

  // Handle country change from phone input
  const handleCountryChange = (countryCode?: string) => {
    if (countryCode) {
      setSelectedCountryCode(countryCode);
      setValue("country", getCountryName(countryCode));
      setValue("state", "");
    }
  };

  // Handle state selection
  const handleStateChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setValue("state", selectedOption.label);
    }
  };

  // Get country name from country code
  const getCountryName = (countryCode: string) => {
    return (
      countries[countryCode as keyof typeof countries] || "Unknown Country"
    );
  };

  // Handle userType selection
  const handleUserTypeChange = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setValue(
        "userType",
        {
          id:
            typeof selectedOption.value === "number" ? selectedOption.value : 0,
          label: selectedOption.label,
          value: String(selectedOption.value),
        },
        { shouldValidate: true }
      );
    }
  };

  // Send Request submission Logic
  const onSubmitHandler = async (data: FormData) => {
    setIsSaving(true);
    const body = {
      fullname: data.fullName,
      phone_number: data.phoneNumber,
      email: data?.email,
      country: data?.country,
      state: data?.state,
      city: data?.city,
      user_type: data?.userType.value,
    };
    try {
      const response = await WaitListRequest(body);
      toast.success(response?.message, {
        style: {
          background: "#22c55e",
          color: "white",
        },
      });
      setShowSuccessMessage(true);
      setShowWaitListForm?.(false);
    } catch (error: unknown) {
      console.error("WaitListRequest error:", error);

      if (error instanceof AxiosError) {
        console.error("WaitListRequest error:", error);
        toast.error(error.response?.data?.message || "An error occurred", {
          style: {
            background: "#ef4444",
            color: "white",
          },
        });
      } else if (error instanceof Error) {
        toast.error(error.message, {
          style: {
            background: "#ef4444",
            color: "white",
          },
        });
      } else {
        toast.error("Something went wrong.", {
          style: {
            background: "#ef4444",
            color: "white",
          },
        });
      }
    } finally {
      setIsSaving(false);
    }
  };
  return (
    <>
      {showWaitListForm && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-[430px] max-w-[360px] md:max-w-[450px] lg:w-[530px] mx-auto">
              <div className="bg-[#F4E8E1] w-full p-5 lg:px-12 rounded-lg">
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                  <div className="flex flex-col space-y-6">
                    {/* ====== Full Name Input ====== */}
                    <InputField
                      labelText="Full Name"
                      labelName="fullName"
                      type="text"
                      placeholder="Enter Name"
                      {...register("fullName", {
                        required: "Full name is required",
                        minLength: {
                          value: 4,
                          message: "Min length is 4 characters",
                        },
                      })}
                      errors={errors}
                    />

                    {/* ====== Email Input ====== */}
                    <InputField
                      labelText="Email"
                      labelName="email"
                      type="email"
                      placeholder="example@gmail.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: EMAIL_REGEX,
                          message: "Invalid email address",
                        },
                        minLength: {
                          value: 4,
                          message: "Min length is 4 characters",
                        },
                      })}
                      errors={errors}
                    />

                    {/* ====== Telephone Input ====== */}
                    <div>
                      <p className="text-[#212121] text-base font-medium">
                        Telephone
                      </p>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{
                          required: "Phone number is required",
                          maxLength: {
                            value: 14,
                            message:
                              "Phone Number should be 14 characters long",
                          },
                          minLength: {
                            value: 7,
                            message:
                              "Phone Number should be minimum 7 characters long",
                          },
                        }}
                        render={({ field, fieldState: { error } }) => (
                          <>
                            <PhoneInput
                              placeholder="+2348080808000"
                              international={true}
                              countryCallingCodeEditable={false}
                              defaultCountry="NG"
                              value={field.value}
                              onChange={(value) => {
                                field.onChange(value);
                              }}
                              onCountryChange={handleCountryChange}
                              countries={allowedCountries}
                              className="phone-input phone-input-country text-[#212121] border border-[#8F8F8F] bg-[#FFFFFF]"
                            />
                            {error && (
                              <p className="text-red-500 text-xs">
                                {error.message}
                              </p>
                            )}
                          </>
                        )}
                      />
                    </div>
                    {/* ====== Country Input ====== */}
                    <InputField
                      labelText="Country"
                      labelName="country"
                      type="text"
                      placeholder="Select Country"
                      value={getCountryName(selectedCountryCode)}
                      {...register("country", {
                        required: "Country is required",
                        minLength: {
                          value: 4,
                          message: "Min length is 4 characters",
                        },
                      })}
                      readOnly={true}
                      errors={errors}
                    />

                    {/* ======  State Input ======  */}
                    <ReactSelect
                      options={states}
                      control={control}
                      labelName="state"
                      labelText="State"
                      placeholder="Select State"
                      padding={"4px"}
                      borderRadius={"5px"}
                      rules={{ required: "State is required" }}
                      onChange={handleStateChange}
                      useValueAsLabel={true}
                    />

                    {/* ====== City Input ====== */}
                    <InputField
                      labelText="City"
                      labelName="city"
                      type="text"
                      placeholder="Select City"
                      {...register("city", {
                        required: "City is required",
                        minLength: {
                          value: 3,
                          message: "Min length is 3 characters",
                        },
                      })}
                      errors={errors}
                    />

                    {/* ====== Activity Input ====== */}
                    <ReactSelect
                      options={activityData}
                      control={control}
                      labelName="userType"
                      labelText="Enter your activity"
                      placeholder="Select one"
                      padding={"4px"}
                      borderRadius={"5px"}
                      rules={{
                        required: "Activity type is required",
                      }}
                      onChange={handleUserTypeChange}
                    />
                  </div>

                  <CustomButton
                    name={`${isSaving ? "Submitting...." : "Join  Waitlist"}`}
                    buttonStyle="bg-[#005F73] hover:bg-[#432818]  w-[80%] md:w-[200px] flex items-center justify-center mx-auto mt-8 flex items-center justify-between"
                  />
                </form>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
