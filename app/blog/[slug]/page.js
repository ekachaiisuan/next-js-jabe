async function getBlogs(slug) {
  const response = await fetch(
    `https://673e98d9a9bc276ec4b4f312.mockapi.io/todos/${slug}`
  );
  if (!response.ok) {
    throw new Error("cannot fetch blog");
  }

  return response.json();
}

export default async function Page({ params }) {
  const { slug } = await params;
  const blog = await getBlogs(slug);
  return (
    <>
      <div>ID: {slug}</div>
      <div>Name: {blog.name}</div>
    </>
  );
}
