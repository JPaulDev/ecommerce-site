import uniqid from 'uniqid';
import xsLogo from '../assets/images/carousel/3xs-logo.webp';
import nvidiaBackground from '../assets/images/carousel/nvidia-background.webp';
import intelBackground from '../assets/images/carousel/intel-background.webp';
import amdBackground from '../assets/images/carousel/amd-background.webp';
import monthBackground from '../assets/images/carousel/month-background.webp';
import nvidiaPc from '../assets/images/carousel/nvidia-pc.webp';
import intelPc from '../assets/images/carousel/intel-pc.webp';
import monthPc from '../assets/images/carousel/month-pc.webp';
import amdPc from '../assets/images/carousel/amd-pc.webp';
import nvidiaLogo from '../assets/images/carousel/nvidia-logo.webp';
import intelLogo from '../assets/images/carousel/intel-logo.webp';
import amdLogo from '../assets/images/carousel/amd-logo.webp';
import monthLogos from '../assets/images/carousel/month-logos.webp';

const slides = [
  {
    id: uniqid(),
    navText: '30 SERIES 3XS PCs',
    background: nvidiaBackground,
    centerImage: nvidiaPc,
    leftLogo: xsLogo,
    leftHeader: 'RTX™ 30 Series PCs',
    leftText: `Custom built PCs built with NVIDIA's 2nd gen Ampere architecture,
      designed to deliver ultimate performance for gamers and creators.`,
    rightHeader: 'Powered by',
    rightLogo: nvidiaLogo,
    textColor: 'black',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    navText: 'INTEL 3XS PCs',
    background: intelBackground,
    centerImage: intelPc,
    leftLogo: xsLogo,
    leftHeader: 'Upgrade to 12\u1D57\u02B0 Gen Intel',
    leftText: `Level-up your PC for the maximum performance boost,
      powered by 12th Gen Intel® Core™ CPUs, with support for PCIe 5.0 graphics
      and DDR5 memory.`,
    rightHeader: 'Powered by',
    rightLogo: intelLogo,
    textColor: 'black',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    navText: 'AMD POWERED GAMING',
    background: amdBackground,
    centerImage: amdPc,
    leftLogo: xsLogo,
    leftHeader: 'AMD Powered Gaming',
    leftText: `3XS Gaming PCs powered by AMD Ryzen & Radeon, designed and built
      with zero compromises.`,
    rightHeader: 'Powered by',
    rightLogo: amdLogo,
    textColor: 'white',
    rightText: [
      'Premium built to order systems',
      'Extensively tested',
      '7 day evening and weekend support',
      'Premium 3 year warranty',
      'Best in-class components',
      'Award-winning systems',
    ],
  },
  {
    id: uniqid(),
    navText: 'PC OF THE MONTH',
    background: monthBackground,
    centerImage: monthPc,
    leftLogo: xsLogo,
    leftHeader: 'PC of the Month',
    leftText: `Our best deal this month, save £100 when you level-up your gaming
      with the 3XS Gamer PBA powered by RTX 3060 Ti.`,
    rightHeader: 'Powered by',
    rightLogo: monthLogos,
    textColor: 'black',
    rightText: [
      '8GB ASUS GeForce RTX 3060',
      'Intel Core i5 12400F or AMD Ryzen 5 5600X',
      'iCUE programmable RGB lighting',
      'Extensively tested',
      'Award-winning systems',
      '3 year warranty',
    ],
  },
];

export default slides;
