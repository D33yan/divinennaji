import Image from 'next/image'
export function LogoBar(){
    return(
    <div className="mt-16 flex justify-center space-x-8">
        <Image src="/logo1.png" alt="Logo 1" width={100} height={100} />
        <Image src="/logo2.png" alt="Logo 2" width={100} height={100} />
        <Image src="/logo3.png" alt="Logo 3" width={100} height={100} />
        <Image src="/logo4.png" alt="Logo 4" width={100} height={100} />
  </div>
    )
}