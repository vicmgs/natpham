defmodule NatphamWeb.Router do
  use NatphamWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", NatphamWeb do
    pipe_through :api

    get "/posts", PostController, :index
    post "/posts/new", PostController, :create
    delete "/posts/:id", PostController, :delete
  end

  scope "/", NatphamWeb do
    pipe_through :browser # Use the default browser stack

    get "/*path", PageController, :index
  end

end
