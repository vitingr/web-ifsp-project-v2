export const Header: React.FC = async () => {
  return (
    <section className="relative h-[450px] w-full sm:h-[600px] lg:h-[1000px]">
      <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-b from-transparent via-neutral-900 to-neutral-950 object-cover opacity-80" />
      <div className="absolute "></div>
      <header className="absolute left-0 top-0 z-10 h-full w-full">
        <video
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            width: '100%',
            height: '100%'
          }}
          src="/homepage/solar-panels.mp4"
          autoPlay
          loop
          muted
        />
      </header>
    </section>
  )
}
