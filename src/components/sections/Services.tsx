import { Airplay, Building2, Cable, Hotel, MonitorCog, MonitorSmartphone, PhoneCall, ShieldX, TabletSmartphone } from "lucide-react";

export default function Services({ id }: { id: string }){
  return(
    <>
      <section id={id} className="flex-col bg-gray-100 flex font-inter justify-center items-start py-12 px-12 gap-10 md:px-32">

        <div className="w-full h-fit flex flex-col bg-slate-300 p-3 rounded-lg gap-5 justify-content items-center md:flex-row">
          <div className="w-fit h-fit p-3 flex justify-center items-center rounded-lg bg-primaria">
            <PhoneCall color="white" size={60}/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-slate-900">PABX Virtual</h3>
            <p className="text-slate-900">Sem custo de manutenção, acesse ramais e recursos de qualquer lugar,  tenha segurança avançada, possua mobilidade total sem infraestrutura física e disponha de ramais remotos para flexibilidade e eficiência.</p>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col bg-slate-300 p-3 rounded-lg gap-5 justify-content items-center md:flex-row-reverse">
          <div className="w-fit h-fit p-3 flex justify-center items-center rounded-lg bg-primaria">
            <MonitorSmartphone color="white" size={60}/>
          </div>
          <div className="flex flex-col md:justify-end md:text-right gap-2">
            <h3 className="text-xl font-semibold text-slate-900">Locação de Equipamentos</h3>
            <p className="text-slate-900">Você foca no seu Core Business que a Vero Empresas cuida da sua tecnologia, com mais eficiência e agilidade, além de uma extensa camada de serviços.</p>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col bg-slate-300 p-3 rounded-lg gap-5 justify-content items-center md:flex-row">
          <div className="w-fit h-fit p-3 flex justify-center items-center rounded-lg bg-primaria">
            <ShieldX color="white" size={60}/>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-slate-900">SDWAN</h3>
            <p className="text-slate-900 flex flex-col"><b className="text-slate-800">Total segurança e controle para a sua empresa.</b>Tenha garantia de privacidade com criptografia de ponta a ponta e redundância de conectividade com dois acessos.</p>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col bg-slate-300 p-3 rounded-lg gap-5 justify-content items-center md:flex-row-reverse">
          <div className="w-fit h-fit p-3 flex justify-center items-center rounded-lg bg-primaria">
            <MonitorCog color="white" size={60}/>
          </div>
          <div className="flex flex-col gap-2 md:justify-end md:text-right">
            <h3 className="text-xl font-semibold text-slate-900">Serviços Digitais</h3>
            <p className="text-slate-900 flex flex-col">Optar pela locação de softwares com Vero Empresas é simples e direto: Escolha o pacote ideal, configure e use e ajuste sempre que precisar. Tenha custo-efetividade, flexibilidade de licenças, acesso em qualquer lugar, segurança robusta.</p>
          </div>
        </div>

        <div className="flex flex-row items-center  justify-center gap-3 flex-wrap w-full">
          <div className="flex justify-center items-center flex-col bg-primaria text-white h-32 p-4 rounded-md gap-1 w-48 text-center">
            <Hotel/>
            <p>Banda Larga Empresarial</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-primaria text-white h-32 p-4 rounded-md gap-1 w-48 text-center">
            <Building2/>
            <p>Banda Larga Corporativo</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-primaria text-white h-32 p-4 rounded-md gap-1 w-48 text-center">
            <Cable/>
            <p>Link Dedicado</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-primaria text-white h-32 p-4 rounded-md gap-1 w-48 text-center">
            <TabletSmartphone/>
            <p>Linha móvel</p>
          </div>
          <div className="flex justify-center items-center flex-col bg-primaria text-white h-32 p-4 rounded-md gap-1 w-48 text-center">
            <Airplay/>
            <p>Assinatura Office 365</p>
          </div>
        </div>
        
      </section>
    </>
  )
}
