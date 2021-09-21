import Button from "../../components/Button";
import TextInput from "../../components/form/TextInput";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useRegister from "./useRegister";
import { useRouter } from "next/dist/client/router";

export default function Register() {
  const { control, handleSubmit } = useForm();
  const { mutate: register } = useRegister();
  const router = useRouter();

  const onSubmit = (data) => {
    register(data, {
      onSuccess: (data) => {
        // here i would save the toekn and data and push to dashboard
      },
    });
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Register</title>
      </Head>
      <h1
        className="text-6xl font-Poppins font-light"
        style={{ marginBottom: 100 }}
      >
        Register
      </h1>
      <div className="flex flex-col items-center w-1/4">
        <TextInput control={control} name="Full Name" />
        <TextInput control={control} name="Phone Number" />
        <TextInput control={control} name="Email" />
        <TextInput control={control} name="Password" />
        <Button title="Register" onClick={handleSubmit(onSubmit)} />
        <p className="mt-10">
          already have account ?
          <Link href="/login">
            <a className="text-purple-500"> Sgin in</a>
          </Link>
        </p>
      </div>
      <div className="absolute left-10 top-10">
        <Image src="/w2w.png" alt="icon" width="93" height="58" />
      </div>
    </div>
  );
}
