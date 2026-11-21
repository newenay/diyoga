import Image from "next/image";

const indexBase = process.env.PAGES_BASE_PATH;

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <Image
          className="dark:invert"
          // src={`${indexBase}/images/diyoga_temp_logo.png`}
          src={"/diyoga/images/diyoga_temp_logo.png"}
          alt="diyoga logo"
          width={500}
          height={500}
          priority
          unoptimized
        />
        <div>
          <p>
            Contact:{" "}
            <a
              href="mailto:info@diyoga.com"
              className="text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              info@diyoga.com
            </a>
          </p>
          <p>
            <span className="yellow-text">
              <small>NODE_ENV: {process.env.NODE_ENV}</small>
            </span>
          </p>
          <p>
            <span className="yellow-text">
              <small>PAGES_BASE_PATH: {process.env.PAGES_BASE_PATH}</small>
            </span>
          </p>
          <p>
            <span className="yellow-text">
              <small>indexBase: {indexBase}</small>
            </span>
          </p>
          <p>
            <span className="yellow-text">
              <small>INPUT_PATH: {process.env.INPUT_PATH}</small>
            </span>
          </p>
        </div>
      </main>
    </div>
  );
}
