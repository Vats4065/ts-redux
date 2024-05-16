import React, { useEffect } from "react";

import { getUser } from "../redux/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(getUser());
    console.log(user);
  }, [dispatch]);
  return (
    <div className="m-auto ">
      {user?.map((item: any) => (
        <>
          <div
            style={{ width: "40%" }}
            className="card bg-light text-center"
            key={item._id}
          >
            <img
              src={`http://localhost:8080/${item.img}`}
              alt="Card image cap"
            />
            <div className="card-body text-start">
              <h3 className="card-title  mt-5  fw-bolder">{item.title}</h3>
              <p className="card-text fs-3">{item.description}</p>
              <p className="card-text fs-3">
                Postby: {item?.creator?.username}
              </p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Home;
