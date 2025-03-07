export const Header: React.FC = async () => {
  return (
    <section className="relative h-[800px] w-full">
      <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-b from-transparent via-neutral-900 to-neutral-950 object-cover opacity-80" />
      <header className="absolute left-0 top-0 z-10 h-full w-full">
        <video
          style={{
            objectFit: 'cover',
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
