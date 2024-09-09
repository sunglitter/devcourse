import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addItem = async (newItem) => {
  const response = await axios.post("https://localhost:5000/api/add", newItem);
  return response.data;
};

const UseMutationEx = () => {
  const addItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: (result) => {
      console.log("Todo created successfully:", result);
    },
    onError: (error) => {
      console.error("Error creating todo:", error);
    },
  });

  const sendData = () => {
    const newTodo = { text: "Do something" };
    addItemMutation.mutate(newTodo);
  };

  return (
    <div>
      <h1>할 일 추가</h1>
      <button onClick={sendData}>Add Todo</button>
    </div>
  );
};

export default UseMutationEx;
