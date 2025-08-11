import { useState } from "react";

function App() {
  const [range, setRange] = useState(3);
  const [price, setPrice] = useState(16);
  const [views, setViews] = useState("100K");
  const [toggle, setToggle] = useState(false);

  const min = 1;
  const max = 5;
  const percentage = ((Number(range) - min) / (max - min)) * 100;

  return (
    <>
      <div className="font-Manrope flex flex-col min-h-screen w-full bg-[url('/src/images/bg-pattern.svg')] bg-no-repeat bg-top bg-[length:100%_auto] items-center justify-center bg-[hsl(230,100%,99%)] lg:pt-0 pt-10">
        <div className="flex flex-col items-center lg:gap-y-12 gap-y-8">
          <div className="flex flex-col bg-[url('/src/images/pattern-circles.svg')] bg-no-repeat bg-center h-[150px] items-center justify-center gap-y-4">
            <span className="font-extrabold lg:text-3xl text-xl text-[hsl(227,35%,25%)] text-center">
              Simple, traffic-based pricing
            </span>
            <span className="text-center text-[hsl(225,20%,60%)] font-semibold lg:text-base text-sm">
              Sign-up for our 30-day trial. No credit card required.
            </span>
          </div>
          <div className="flex flex-col bg-white lg:w-[630px] shadow-lg rounded-lg">
            <div className="flex flex-col gap-y-14 lg:p-12 p-8 border-b-2 border-[hsl(224,65%,95%)]">
              <div className="flex flex-row lg:justify-between justify-center items-center">
                <span className="tracking-widest font-bold text-[hsl(225,20%,60%)] text-sm">
                  {views} PAGEVIEWS
                </span>
                <div className="hidden flex-row items-center lg:flex">
                  <span className="text-[42px] font-extrabold text-[hsl(227,35%,25%)] mr-2">
                    ${price.toFixed(2)}
                  </span>
                  <span className="font-semibold text-[hsl(225,20%,60%)] tracking-wide">
                    /{toggle ? "year" : "month"}
                  </span>
                </div>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={1}
                value={range}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  setRange(newValue);
                  switch (newValue) {
                    case 1:
                      if (toggle) setPrice(72);
                      else setPrice(8);
                      setViews("10K");
                      break;
                    case 2:
                      if (toggle) setPrice(108);
                      else setPrice(12);
                      setViews("50K");
                      break;
                    case 3:
                      if (toggle) setPrice(144);
                      else setPrice(16);
                      setViews("100K");
                      break;
                    case 4:
                      if (toggle) setPrice(216);
                      else setPrice(24);
                      setViews("500K");
                      break;
                    case 5:
                      if (toggle) setPrice(324);
                      else setPrice(36);
                      setViews("1M");
                      break;
                  }
                }}
                className="w-full h-2 rounded-lg appearance-none"
                style={{
                  background: `linear-gradient(to right, hsl(174,86%,45%) ${percentage}%, hsl(224,65%,95%) ${percentage}%)`,
                }}
              />
              <div className="flex flex-row items-center justify-center lg:hidden">
                <span className="text-[42px] font-extrabold text-[hsl(227,35%,25%)] mr-2">
                  ${price.toFixed(2)}
                </span>
                <span className="font-semibold text-[hsl(225,20%,60%)] tracking-wide">
                  /{toggle ? "year" : "month"}
                </span>
              </div>
              <div className="flex flex-row justify-end items-center gap-x-4 lg:mr-[52px]">
                <span className="text-sm text-[hsl(225,20%,60%)]  font-semibold">
                  Monthly Billing
                </span>
                <label
                  htmlFor="check"
                  className="w-[45px] h-[23px] rounded-full relative flex items-center p-1 cursor-pointer bg-[hsl(223,50%,87%)] hover:bg-[hsl(174,77%,80%)]"
                >
                  <input
                    type="checkbox"
                    id="check"
                    className="sr-only peer"
                    checked={toggle}
                    onChange={() => {
                      setToggle(!toggle);
                      switch (range) {
                        case 1:
                          if (!toggle) setPrice(72);
                          else setPrice(8);
                          break;
                        case 2:
                          if (!toggle) setPrice(108);
                          else setPrice(12);
                          break;
                        case 3:
                          if (!toggle) setPrice(144);
                          else setPrice(16);
                          break;
                        case 4:
                          if (!toggle) setPrice(216);
                          else setPrice(24);
                          break;
                        case 5:
                          if (!toggle) setPrice(324);
                          else setPrice(36);
                          break;
                      }
                    }}
                  />
                  <span className="size-4 bg-[hsl(240,78%,98%)] absolute rounded-full peer-checked:ml-5 transition-all duration-200"></span>
                </label>
                <div className="flex flex-row gap-x-2 items-center">
                  <span className="text-sm text-[hsl(225,20%,60%)] font-semibold">
                    Yearly Billing
                  </span>
                  <span className="text-[hsl(15,100%,70%)] bg-[hsl(14,92%,95%)] rounded-2xl text-[11px] px-1.5 py-0.5 font-bold flex flex-row gap-x-1">
                    25% <span className="hidden lg:block">discount</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-y-7 lg:px-12 px-8 py-8 justify-between items-center">
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-row gap-x-3 items-center">
                  <img
                    src="/src/images/icon-check.svg"
                    alt="check"
                    className="h-2.5"
                  />
                  <span className="text-sm text-[hsl(225,20%,60%)] font-semibold">
                    Unlimited websites
                  </span>
                </div>
                <div className="flex flex-row gap-x-3 items-center">
                  <img
                    src="/src/images/icon-check.svg"
                    alt="check"
                    className="h-2.5"
                  />
                  <span className="text-sm text-[hsl(225,20%,60%)] font-semibold">
                    100% data ownership
                  </span>
                </div>
                <div className="flex flex-row gap-x-3 items-center">
                  <img
                    src="/src/images/icon-check.svg"
                    alt="check"
                    className="h-2.5"
                  />
                  <span className="text-sm text-[hsl(225,20%,60%)] font-semibold">
                    Email reports
                  </span>
                </div>
              </div>
              <button className="bg-[hsl(227,35%,25%)] text-[hsl(226,100%,87%)] text-sm py-3 px-14 rounded-full font-bold cursor-pointer">
                Start my trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
