import Image from "next/image";

const HeroSection = () => (
  <div className="flex min-h-screen">
    <div className="flex-1 flex flex-col justify-between p-8">
      <div className="flex flex-col items-start justify-center h-full">
        <h1 className="font-bold text-5xl sm:text-7xl leading-none">
          Your artistic <br />
          vision <br />
          our creative <br />
          mission <br />
        </h1>
        <p className="mt-6 text-base sm:text-lg max-w-sm">
          At Kanji Studio, we aim to provide <br />
          a creative and supportive environment <br />
          to bring your artistic vision to life.
        </p>
      </div>
      <div></div> {/* Empty div for spacing if needed */}
    </div>
    <div className="flex-1 flex">
      <div className="w-1/2 h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1564960616030-60a811385817?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
          fill
          style={{ objectFit: "cover" }}
          alt="Image 1"
        />
      </div>
      <div className="w-1/2 h-full relative">
        <Image
          src="https://images.unsplash.com/photo-1480511361210-b1b966c8d614?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image path
          fill
          style={{ objectFit: "cover" }}
          alt="Image 2"
        />
      </div>
    </div>
  </div>
);

export default HeroSection;
