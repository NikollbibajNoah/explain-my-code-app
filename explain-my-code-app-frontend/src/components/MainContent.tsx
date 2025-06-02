import React from "react";

export interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <main className="flex-1 overflow-y-auto">{children}</main>;
};
