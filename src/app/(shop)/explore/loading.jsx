export default function ExploreLoading() {
  return (
    <div className="relative w-full min-h-screen bg-linear-to-tr from-[#7F677A] via-[#544850] to-[#7F677A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[60%] left-[-5%] w-[500px] h-[500px] bg-[#7F677A]/60 rounded-full blur-[80px]" />
        <div className="absolute top-[60%] right-[-5%] w-[500px] h-[500px] bg-[#3A3241]/15 rounded-full blur-[60px]" />
      </div>

      <main className="relative z-10 pt-16 pb-24 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Heading Skeleton */}
        <section className="max-w-3xl mx-auto text-center mb-14 flex flex-col items-center">
          <div className="w-48 h-4 bg-white/10 rounded-full animate-pulse mb-8" />
          <div className="w-full max-w-xl h-20 bg-white/10 rounded-xl animate-pulse" />
        </section>

        {/* Category filters Skeleton */}
        <section className="flex flex-wrap justify-center gap-3 mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-24 h-10 bg-white/10 rounded-full animate-pulse" />
          ))}
        </section>

        {/* Results meta Skeleton */}
        <div className="w-40 h-4 bg-white/10 rounded-full animate-pulse mb-6" />

        {/* Product grid Skeletons */}
        <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-full aspect-[4/5] bg-white/10 rounded-sm animate-pulse" />
              <div className="space-y-2">
                <div className="w-3/4 h-3 bg-white/10 rounded-full animate-pulse" />
                <div className="w-1/2 h-3 bg-white/10 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  )
}
