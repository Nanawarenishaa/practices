import Button from "./Button"

const Index = () => {

   
  return (
    <div className="w-full m-h-[100vh] flex flex-col items-center ">
    <div className=" w-[100%] m-h-[100vh] grid grid-cols-1 md:grid-cols-2">
     <div className="bg-slate-900">
     <div className=" mt-12 mb-4 w-[60%] p-4 mx-auto flex flex-col gap-8 bg-slate-450 md:mt-48 ">
  <h2 className="text-white text-2xl font-bold mr-8 sm:text-4xl">YOU CAN HIRE FREELANCER HERE</h2>
  <p className="text-white">Its a long established fact that a reader will be distracted by the readable content of a page. </p>
  <div className="flex gap-2"> 
  <Button text={"About Us"} />
      <button className="text-black px-4 sm:px-8 bg-white hover:bg-transparent hover:text-white hover:border border-white" > Get a Quick</button>
  </div>

  </div>
     </div>


     <div className="bg-teal-500 ">
        <div className=" md:mt-32 p-10 w-full ">
            <img src="slider-img.png" alt="" />
        </div>
     </div>
      </div>
</div>
  )
}

export default Index