import React from "react";

type TPage = {
  children: React.ReactNode;
};

export default function Page(props: TPage) {
  const { children } = props;
  return <div className="p-8">{children}</div>;
}
