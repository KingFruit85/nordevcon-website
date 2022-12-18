import Link from "next/link";

export default function FourOhFour() {
  return (
    <>
      <div class="text-center">
        <p class="mt-4 text-3xl font-extrabold text-red sm:text-4xl lg:text-5xl">
          404 - We looked everywhere but this crab must have gotten to it first
        </p>
        <p class="inline text-5xl font-extrabold leading-normal tracking-tight text-transparent bg-gradient-to-r from-wave-purple via-wave-pink to-wave-orange bg-clip-text font-display bg-move">
          <Link href="/">
            <a> Take me home!</a>
          </Link>
        </p>
      </div>

      <img
        src="/img/404.png"
        alt="Don't look him in the eye!"
        className="w-full overflow-hidden relative"
        style={{ height: "100vh" }}
      />
    </>
  );
}
