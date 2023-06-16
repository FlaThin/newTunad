import Image from "next/image";
import { Form } from "../Components/Form";
import { Input } from "../Components/Form/Input";
import Side from "../../../public/side3.png";


export default function Login() {
  return (
    <section className="flex h-full">
      <Image
        src={Side}
        alt="A imagem reprenseta uma pessoa utilizando um notebook"
        width={1000}
        height={600}
        className="rounded-s-2xl object-cover"
      />
      <Form className="bg-white flex flex-col gap-4 p-6 py-10 rounded-e-2xl w-[400px]" >
        <div className="flex gap-2 items-center">
          <Image src="/logo.svg" width={48} height={48} alt="logo referente a Tunad"/>
          <h2 className="font-bold">Tunad</h2>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            placeholder="Email ou username "
            label="Email"
          />
          <Input
            placeholder="Digite sua senha"
            label="Senha"
          />
        </div>
      </Form>
    </section>


  )
}