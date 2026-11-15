import Image from "next/image";
import localFont from "next/font/local"

const googleSans = localFont({
  src:'../../public/fonts/GoogleSans-Regular.ttf',

  variable: '--font-google-sans',
  
})
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>សួស្ដី</h1>
      <Image src={"https://i.pinimg.com/736x/5f/e2/1c/5fe21c514efac592fa6b08662bd8aa2b.jpg"}
      alt="Cat"
      width={250}
      height={300}
      />
    </div>
  );
}
