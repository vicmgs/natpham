defmodule NatphamWeb.PostController do
  use NatphamWeb, :controller
  alias Natpham.Posts

  def create(conn, params) do
    IO.inspect Posts.create_post(params)
# unique contraint on title
    conn
      |> put_status(:accepted)
      |> render("post.json", %{})
  end
end
