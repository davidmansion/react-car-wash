import { GiCarSeat } from 'react-icons/gi';
import { BsCarFrontFill } from 'react-icons/bs';

export const ServiceCardData = [
  {
    title: 'BRONZE Outside only',
    price: ['Small Car £6', 'Medium Car £8', 'Large/Luxury/4x4'],
    services: ['Külső vízes mosás', 'Ablaktisztítás', 'Kerékápolás'],
    duration: '40 perc',
    icons: [
      <BsCarFrontFill className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green" />,
    ]
  },
  {
    title: 'Belső tisztítás',
    price: '5 000 HUF-tól',
    services: ['Porszívózás', 'Ablaktisztítás', 'Portörlés', 'Műanyagápolás'],
    duration: '40 perc',
    icons: [
      <GiCarSeat className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green transform scale-x-[-1]" />
    ]
  },
  {
    title: 'Külső és belső tisztítás',
    price: '7 000 HUF-tól',
    services: ['Külső vízes mosás', 'Porszívózás', 'Ablaktisztítás', 'Portörlés', 'Kerékápolás', 'Műanyagápolás'],
    duration: '1.5 óra',
    icons: [
      <BsCarFrontFill className="absolute h-32 w-32 bottom-36 right-8 opacity-5 text-green" />,
      <GiCarSeat className="absolute h-32 w-32 bottom-4 right-8 opacity-5 text-green transform scale-x-[-1]" />
    ]
  },
  {
    title: 'Polírozás',
    price: '35 000 HUF-tól',
    services: ['Külső vízes mosás', 'Több rétegű polírozás', 'Ablaktisztítás'],
    duration: '8 óra',
    icons: [
      <BsCarFrontFill className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green" />,
    ]
  },
  {
    title: 'Lámpapolírozás',
    price: '14 000 HUF/pár',
    services: ['Többrétetű vízes csiszolás', 'Polírozás', 'UV védelemmel való ellátás'],
    duration: '1.5 óra',
    icons: [
      <BsCarFrontFill className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green" />,
    ]
  },
  {
    title: 'Kárpittisztítás',
    price: '26 000 HUF-tól',
    services: ['Műanyagápolás', 'Bőr és kárpittisztítás gőzzel', 'Porszívózás', 'Ablaktisztítás', 'Portörlés'],
    duration: '8 óra',
    icons: [
      <GiCarSeat className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green transform scale-x-[-1]" />
    ]
  },
  {
    title: 'Ózon tisztítás',
    price: '10 000 HUF',
    services: ['Ózongenerátoros technikával történő fertőtlenítés', 'Hatékonyan semlegesíti a kellemetlen szagokat'],
    duration: '30 perc',
    icons: [
      <GiCarSeat className="absolute bottom-8 right-2 w-52 h-52 opacity-5 text-green transform scale-x-[-1]" />
    ]
  },
];
