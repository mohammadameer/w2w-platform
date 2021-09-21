import { useMutation } from "react-query";

// what is the url to register
const useRegister = () =>
  useMutation((data) =>
    fetch("", { method: "post", body: JSON.stringify(data) })
  );

export default useRegister;
