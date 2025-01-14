
export default function SectionB() {
    return (
    <section className="h-screen w-full relative mt-16">
        <div className="flex flex-row bg-slate-100 mx-auto lg:d-fx ">
            {/* <div className="flex flex-grow-1/3 transform translate-x-4 translate-y-30" >
                    <img 
                    className="w-3/12 h-3/12 md:w-full lg:w-6/12 xl:w-6/12" 
                    src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page@2x.png"  width="20px" height="20px"/>
            </div> */}
            <div style={{ position: 'relative', width: '100%'}}>
                <div style={{ width: '100%', height: '100%' }}/>
                <div style={{ position: 'absolute', top: '-40px', left: '0', width: '100%', height: '100%', backgroundImage: 'url("https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page@2x.png")', backgroundSize: '80%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}/>
             </div>
            <div className="flex-grow-2/3 ">
                <article>
                    <h2 className="text-4xl font-semibold py-7">
                        <span className="text-setmoreHeading font-setmoreHeading">Spotlight your brand</span>
                        <span className="text-setmore">.</span>
                    </h2>
                    <p className="text-zinc-600 text-lg font-light w-96">
                    Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenience.
                    </p>
                    <button className="border border-setmore text-setmore w-60 py-3 px-7 text-sm rounded-md font-light mt-5">
                        <span>Create your Booking Page</span>
                    </button>
                </article>
            </div>
        </div>
    </section>
    )
}