import classNames from "classnames";
import { useEffect, useState, startTransition } from "react";

const hexArray = Array.from({length: 8 * 12}).fill(null);

export default function Hero(/* { speakers } */) {
  return (
    <section className="relative" id="hero">
      <div className="absolute w-full h-full">
        <div className="section pt-8 lg:pt-36">
          <img
            src="/static/images/nordevcon-logo.png"
            height="56px"
            width="320px"
            alt="nor(DEV):con - The eastern region's biggest tech conference returns in June 2022!"
            className="mb-8"
          />

          <h1 className="headline text-indigo-100">
            <span className="hidden">
              nor(DEV):con
            </span>
            <span>
              The eastern region's biggest tech conference returns in June 2022!
            </span>
          </h1>

          <p className="mt-24 text-purple-300 font-black text-2xl lg:text-4xl">On the 16<sup>th</sup> &amp; 17<sup>th</sup> June 2022</p>
        </div>
      </div>

      <div className="hex-grid">
        <div className="hex-grid__list">
          {hexArray.map((_, key) => (
            <div key={key} className="hex-grid__item">
              <Hex />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hex() {
  const [shouldHightlight, setShouldHighlight] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      startTransition(() => {
        setShouldHighlight(Math.random() > 0.99)
      })
    }, 500);

    return () => clearInterval(interval)
  }, [])

  return <div className={classNames("hex-grid__content", { highlight: shouldHightlight })}></div>
}
