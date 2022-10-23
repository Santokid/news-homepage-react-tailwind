export function TopPost() {
  return (
    <>
      <section className="flex justify-center">
        <div className="grid grid-cols-3 w-9/12">
          <div className="flex h-36 my-4  ">
            <img
              className="h-36 "
              src="../src/images/image-retro-pcs.jpg"alt=""/>
            <div className="flex flex-col pr-3 pl-4 justify-items-center">
              <h1 className="text-3xl text-gray-400">1</h1>
              <a href="#" className="text-sm text- font-bold pr-4 py-2 hover:text-orange-col  ">Reviving Retro PCs</a>
              <p className="text-xs text-gray-500 font-medium pr-4">What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className="flex h-36 my-4  ">
            <img
              className="h-36 "
              src="../src/images/image-top-laptops.jpg"alt=""/>
            <div className="flex flex-col pr-3 pl-4 justify-items-center">
              <h1 className="text-3xl text-gray-400">2</h1>
              <a href="#" className="text-sm text- font-bold pr-4 mt-4 hover:text-orange-col  ">Top 10 Laptops of 2022 </a>

              <p className="text-xs text-gray-500 font-medium pr-4">Our best picks for varius needd and budgets</p>
            </div>
          </div>
          <div className="flex h-36 my-4  ">
            <img
              className="h-36 "
              src="../src/images/image-gaming-growth.jpg"alt=""/>
            <div className="flex flex-col pr-3 pl-4 justify-items-center">
              <h1 className="text-3xl text-gray-400">3</h1>
              
              <a href="#" className="text-sm text- font-bold pr-4 py-4 hover:text-orange-col ">The Growth of Gaming</a>

              <p className="text-xs text-gray-500 font-medium pr-4">How the pandemic has sparked fresh opportunities</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
