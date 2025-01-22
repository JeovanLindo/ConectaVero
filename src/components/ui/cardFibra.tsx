import PricesFibra from '@/lib/pricesfibra'

import {CircleCheckBig} from 'lucide-react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Button } from './button';

const teste = PricesFibra.map((price)=> {
  return {
    plano: price.Plano,
    megas: price.Megas,
    preco: price.Preco,
    bytes: price.Bytes,
    beneficios: price.Beneficios,
    haveBonus: price.HaveBonus
  }
})                     

export function LinkDuplo({ teste1 }: { teste1: typeof teste[0] }){
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    let url : string
    
    if (teste1.megas === ''){
      url =`https://wa.me/5521991041111?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20Conecta%20Vero%20e%20me%20interessei%20pela%20${teste1.plano}!`;
    } else {
      url =`https://wa.me/5521991041111?text=Ol%C3%A1,%20quero%20ser%20um%20cliente%20da%20Conecta%20Vero%20e%20me%20interessei%20pela%20${teste1.plano}%20de%20${teste1.megas}%20${teste1.bytes}!`;
    }
    window.open(url, '_blank'); 
  }  
return (
  <Button className='w-full'>
    <a target='_blank' onClick={handleClick}>Clique aqui</a>
  </Button>
);
}

export function CardNavFibra() {
  return (
    <Swiper
        className=''
        slidesPerView={1}
        spaceBetween={14}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        breakpoints={{
         640: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          1180: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1520: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1920: {
            slidesPerGroup: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {teste.map((teste1, index)=>(
          <SwiperSlide className=' h-[34rem] flex flex-row justify-center w-72 mb-10 items-center'
          key={index}>
            <div className='flex flex-col h-full justify-between items-center border border-primaria gap-8 rounded-md w-full p-5'>
              <div className='flex gap-3 w-full items-center justify-center h-fit flex-col'>
                  <p className='text-2xl font-bold text-secundaria items-center justify-center uppercase text-center w-full flex gap-1 flex-row'>{teste1.plano}</p>
                  <p className='text-4xl font-bold text-primaria flex items-center gap-1'>
                   {teste1.megas}
                   {teste1.bytes === 'megas' ? ' MEGA' : '' }
                   {teste1.bytes === 'giga' ? 'GB' : ''}
                  </p>
              </div>

              <div className='w-full flex gap-3 flex-col'>
                <h1 className='font-normal text-primaria' >Benefícios</h1>   
                <ul >{Object.values(teste1.beneficios).map((beneficio, index) => (
                  <li key={index} className='text-md items-center flex flex-row gap-1
                   opacity-80 text-primaria'>
                   <CircleCheckBig className='w-4'/> {beneficio}
                  </li>
                ))}
                </ul>
                
              </div>

              <div className='flex w-full flex-col'>
                <p className='text-3xl text-primaria justify-start w-full font-medium flex flex-row items-end'>
                  {teste1.haveBonus === true ? '' : 'POR R$'}
                  {teste1.preco}
                </p>
              </div>

              
              <LinkDuplo teste1={teste1}/>
              
            </div>
              
          </SwiperSlide>
        ))}
        
      </Swiper>
  )
} 

export default function CardFibra({ id }: { id: string }) {
  return (
  <>
      <div id={id} className='h-fit w-full flex gap-5 flex-row font-light' >
      <CardNavFibra/> 
      </div>
  </>
)

}