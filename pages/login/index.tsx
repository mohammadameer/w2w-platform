import Button from "../../components/Button";
import TextInput from "../../components/form/TextInput";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import useLogin from "./useLogin";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const { control, handleSubmit } = useForm();
  const { mutate: login, data } = useLogin();
  const router = useRouter();

  const onSubmit = (data) => {
    login(data, {
      onSuccess: (data) => {
        // here i would save the token to use for future requests and push to the dashboard
      },
    });
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>Login</title>
      </Head>
      <h1
        className="text-6xl font-Poppins font-light"
        style={{ marginBottom: 100 }}
      >
        Sign in
      </h1>
      <div className="flex flex-col items-center w-1/4">
        <TextInput control={control} name="Email" />
        <TextInput control={control} name="Password" />
        <Button title="Login" onClick={handleSubmit(onSubmit)} />
        <p className="mt-10">
          don&apos;t have account ?
          <Link href="/register">
            <a className="text-purple-500"> Create Account</a>
          </Link>
        </p>
      </div>
      <div className="absolute left-10 top-10">
        <Image src="/w2w.png" alt="icon" width="93" height="58" />
      </div>
    </div>
  );
}
