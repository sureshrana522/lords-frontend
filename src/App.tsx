import React from "react";
import Layout from "./components/Layout";
import { ThemeProvider } from "./ThemeContext";
import { DataProvider } from "./DataContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Layout>
          <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold text-yellow-500">
              LORDS BESPOKE – LIVE
            </h1>
          </div>
        </Layout>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
