import { useForm } from "react-hook-form";

export default function Create() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("/api/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .thin((data) => {
        if (data.insertedId) {
          alert("News Successfully Created");
        }
      });
  };

  return (
    <form
      style={{
        width: "50%",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input {...register("id")} placeholder="Id" />
      <input {...register("title")} placeholder="title" />
      <input {...register("description")} placeholder="description" />
      <input {...register("author")} placeholder="author" />
      <input {...register("release_date")} placeholder="release_date" />
      <input {...register("category")} placeholder="category" />
      <input {...register("common_count")} placeholder="common_count" />
      <input {...register("image_url")} placeholder="image_url" />
      <input type="submit" />
    </form>
  );
}
