import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1268,
        margin: "0 auto",
        padding: "0 16px",
      }}
    >
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
