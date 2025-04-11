import { CircleDollarSign, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function Sales () {
  return(
    <Card className="flex-1 flex-col md:w-1/2 md:max-w-[600px]">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl textgray-800">
            Últimos clientes
          </CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4 " />
        </div>
      </CardHeader>

      <CardDescription>
        {/* Aqui cabe um fix que pode ser o push do pipeline */}

        Novos clientes nas últimas 24 horas
      </CardDescription>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2"> 
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/marcio-loiola.png" />
            <AvatarFallback> DV </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold"> Estudante </p>
            <span className="text-[12px] sm:text-sm text-gray-400"> marciogomes@alu.ufc.br </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2"> 
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/marcio-loiola.png" />
            <AvatarFallback> DV </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold"> Estudante </p>
            <span className="text-[12px] sm:text-sm text-gray-400"> marciogomes@alu.ufc.br </span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2"> 
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/marcio-loiola.png" />
            <AvatarFallback> DV </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:textbase font-semibold"> Estudante </p>
            <span className="text-[12px] sm:text-sm text-gray-400"> marciogomes@alu.ufc.br </span>
          </div>
        </article>
      </CardContent>
    </Card>

  )
}