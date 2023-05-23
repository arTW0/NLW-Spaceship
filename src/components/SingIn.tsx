import { User } from 'lucide-react'

export function SingIn() {
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}  // ID DE CASA
      // href={`https://github.com/login/oauth/authorize?client_id=fcd21f844543da687187`}  //ID ONCOLOGICA
      className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
        <User className="h-5 w-5 text-gray-500" />
      </div>
      <p className="text-sm leading-snug max-w-[140px]">
        <span className="underline">Crie sua conta</span> e salve suas memórias
      </p>
    </a>
  )
}