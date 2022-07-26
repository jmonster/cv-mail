import { ReactNode } from "react";

const Layout = ({ children }: Record<string, ReactNode>) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black">
      <main className="flex-auto w-full max-w-4xl mx-auto p-1 md:p-8 bg-white text-black dark:bg-gray-900 dark:text-white">
        {children}
      </main>
    </div>
  );
};

export default Layout;
