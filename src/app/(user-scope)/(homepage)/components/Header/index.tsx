import Image from 'next/image'

export const Header: React.FC = async () => {
  return (
    <section className="relative h-[300px] w-full sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px]">
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
          className="hidden md:flex"
          src="/homepage/background-video.mp4"
          autoPlay
          loop
          muted
        />
        <Image
          alt="Restaurant Image"
          className="flex w-full object-cover md:hidden"
          height={1238}
          src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg"
          width={2200}
        />
      </header>
    </section>
  )
}
