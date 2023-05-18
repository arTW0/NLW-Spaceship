export default function Home() {
  return <main className=" grid min-h-screen grid-cols-2">
    <div></div>

    {/*Right side*/}
    <div className="flex flex-col p-16">
      <div className="flex flex-1 items-center justify-center">
        <p className="text-center leading-relaxed w-[360px]">
          Você ainda não registrou nenhuma memória, comece a{' '}
          <a href="/" className="">crirar agora!</a>
        </p>
      </div>
    </div>
  </main>
}
