

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden text-white pt-32 flex items-center justify-center"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Home video/MAH00650.MP4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-6 text-center max-w-3xl">
        <h1 className="mt-4 text-5xl md:text-6xl font-semibold uppercase leading-tight opacity-80">
         <span className="block">suro</span>
  <span className="block">kim</span>
        </h1>
        <p className="mt-6 text-lg text-gray-200 opacity-40">
        UX/UI DESIGNER 
        </p>
      </div>
    </section>
  );
}
