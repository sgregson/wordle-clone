// components/layout.js

import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col mx-1 my-1">
      <Navbar className="fixed bottom-0 left-0 right-0 m-1 // sm:mt-1 sm:mb-5 sm:relative" />
      <main className="justify-self-start grid gap-2 w-full md:w-[48rem] mx-auto mb-20">
        {children}
      </main>
      <Footer className="grid grid-cols-1 text-center mt-auto border-t p-2 // pb-[3rem] // sm:pb-2" />
    </div>
  );
}
