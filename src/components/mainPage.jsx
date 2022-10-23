import { NewsCard } from "./newsCard";

export function MainPage() {
  return (
    <>
      <div className="flex pt-10 justify-center ">
        <div className=" flex w-9/12 ">
          <section className=" grid grid-cols-2 w-4/5  ">
            <img
              className="w-fit col-span-2"
              src="../src/images/image-web-3-desktop.jpg"
              alt=""
            />
            <h1 className="... text-5xl mt-5">The Bright Future of Web 3.0?</h1>
            <div className="... flex-row justify-between mt-5 mx-4">
              <p className="text-xs">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-orange-col px-3 py-1 text-white uppercase text-xs tracking-widest mt-6 hover:bg-blue-dark hover:text-white " >Read more</button>
            </div>
          </section>
          <NewsCard />
        </div>

      </div>
    </>
  );
}
