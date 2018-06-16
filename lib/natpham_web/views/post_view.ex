defmodule NatphamWeb.PostView do
  use NatphamWeb, :view
  alias NatphamWeb.PostView

  def render("index.json", %{posts: posts}) do
    render_many(posts, PostView, "post.json")
  end

  def render("post.json", %{post: post}) do
    %{
      id: post.id,
      title: post.title,
      description: post.description,
      caption: post.caption,
      link: post.link
    }
  end

  def render("create.json", %{message: msg}) do
    %{message: msg}
  end
end
