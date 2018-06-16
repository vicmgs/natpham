defmodule NatphamWeb.PostController do
  use NatphamWeb, :controller
  alias Natpham.Posts

  action_fallback NatphamWeb.FallbackController

  def index(conn, _) do
    posts = Posts.get_all()

    render(conn, "index.json", posts: posts)
  end

  def create(conn, params) do
    with {:ok, _} <- Posts.create_post(params) do
      conn
        |> put_status(:accepted)
        |> render("create.json", message: "Your post has been created successfully")
    end
  end

  def delete(conn, %{"id" => id}) do
    post = Posts.get!(id)
    with {:ok, _} <- (Posts.delete(post)) do
      conn
        |> put_status(:accepted)
        |> render("create.json", message: "Your post has been deleted successfully")
    end
  end
end
