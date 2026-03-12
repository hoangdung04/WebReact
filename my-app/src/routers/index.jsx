import LayoutDefault from "../Layout/LayoutDefault";
import BookRoom from "../Pages/BookRoom";
import CreateRoom from "../Pages/CreateRoom";
import DashBoard from "../Pages/DashBoard";
import ListRoom from "../Pages/ListRoom";



export const Router = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: "/book-room",
        element: <BookRoom />,
      },
      {
        path: "/create-room",
        element: <CreateRoom />,
      },
      {
        path: "/list-room",
        element: <ListRoom />,
      },


    ],
  },
];
