import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <main className="max-w-3xl mx-auto p-10">
        <Component {...pageProps} />
      </main>
    </div>
  );
};

export default App;
