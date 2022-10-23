export function NewsCard() {
  return (
    <section className="flex ml-4 bg-blue-dark justify-center content-around w-300">
      <div className=" flex flex-col w-11/12 justify-evenly ">
        <h1 className="text-3xl text-orange-400 py-1">New</h1>
        <div className="h-80">
          <div className="flex flex-col
          ">
            <a href="#" className="text-white hover:text-orange-400   font-bold">
              Hydrogen VS Electric Cars
            </a>
            <p className="text-xs text-slate-400 pb-6 pt-4">
              Will hydrogen-fueled cars ever catch up to EVs?
            </p>
            <hr className="opacity-25 pb-6" />
          </div>
          <div className="flex flex-col ">
            <a href="#" className="text-white hover:text-orange-400 font-bold">
              The Downsides of AI Artistry
            </a>
            <p className="text-xs text-slate-400 pb-6 pt-4">
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
            <hr className="opacity-25 pb-6" />
          </div>
          <div className="flex flex-col ">
            <a href="#" className="text-white hover:text-orange-400 font-bold">Is VC Funding Drying Up?</a>
            <p className="text-xs text-slate-400 pt-4">
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
