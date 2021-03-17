export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-blue-200">
      <div className="flex flex-col items-center">
        <h1 className="px-10 font-bold text-9xl bg-blue-400 leading-normal">
          rgb.codes
        </h1>
        <ul className="flex justify-center items-center bg-blue-600 w-full">
          <li className="py-2 px-2">
            <a
              className="inline-block hover:text-white transform hover:scale-110 transition duration-500"
              href="https://twitter.com/ronderksen"
            >
              Twitter
            </a>
          </li>
          <li className="py-2 px-2">
            <a
              className="inline-block hover:text-white transform hover:scale-110 transition duration-500"
              href="https://github.com/ronderksen"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
