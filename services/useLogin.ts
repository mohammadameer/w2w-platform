import { useMutation } from "react-query";

const useLogin = () =>
  useMutation((data) =>
    fetch(
      "https://w2wworld.herokuapp.com/api/v1/accounts/w2w-user/authenticate",
      { method: "post", body: JSON.stringify(data) }
    )
  );

export default useLogin;
