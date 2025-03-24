import BackgroundPattern from '@/components/BackgroundPattern';
import BottomStrip from '@/components/BottomStrip';
import BrandLogo from '@/components/BrandLogo';
import JarDisplay from '@/components/JarDisplay';
import SloganElement from '@/components/SloganElement';
import WaitlistButton from '@/components/WaitlistButton';

export default function Home() {
  // Array of slogan configurations
  const slogans = [
    // Original slogans
    { position: { top: '12%', right: '10%' }, width: 'w-[160px]', mdWidth: 'md:w-[200px]', rotation: 6, opacity: 0.5 },
    { position: { top: '28%', left: '8%' }, width: 'w-[140px]', mdWidth: 'md:w-[180px]', rotation: -8, opacity: 0.4 },
    { position: { top: '40%', left: '12%' }, width: 'w-[120px]', mdWidth: 'md:w-[150px]', rotation: 12, opacity: 0.35 },
    { position: { top: '35%', right: '15%' }, width: 'w-[130px]', mdWidth: 'md:w-[170px]', rotation: -15, opacity: 0.3 },
    { position: { top: '55%', left: '20%' }, width: 'w-[110px]', mdWidth: 'md:w-[140px]', rotation: 20, opacity: 0.25 },
    { position: { top: '48%', right: '22%' }, width: 'w-[120px]', mdWidth: 'md:w-[160px]', rotation: -10, opacity: 0.35 },
    { position: { bottom: '32%', left: '15%' }, width: 'w-[130px]', mdWidth: 'md:w-[170px]', rotation: -5, opacity: 0.4 },
    { position: { bottom: '38%', right: '8%' }, width: 'w-[150px]', mdWidth: 'md:w-[190px]', rotation: 8, opacity: 0.45 },
    { position: { bottom: '45%', left: '40%' }, width: 'w-[140px]', mdWidth: 'md:w-[180px]', rotation: 15, opacity: 0.3 },
    { position: { top: '25%', left: '35%' }, width: 'w-[130px]', mdWidth: 'md:w-[160px]', rotation: -12, opacity: 0.25 },
    
    // Previously added slogans
    { position: { top: '5%', left: '30%' }, width: 'w-[100px]', mdWidth: 'md:w-[130px]', rotation: 18, opacity: 0.2 },
    { position: { top: '18%', right: '30%' }, width: 'w-[110px]', mdWidth: 'md:w-[140px]', rotation: -22, opacity: 0.3 },
    { position: { top: '50%', left: '48%' }, width: 'w-[90px]', mdWidth: 'md:w-[120px]', rotation: 5, opacity: 0.15 },
    { position: { bottom: '15%', left: '5%' }, width: 'w-[120px]', mdWidth: 'md:w-[150px]', rotation: 10, opacity: 0.25 },
    { position: { bottom: '20%', right: '25%' }, width: 'w-[100px]', mdWidth: 'md:w-[130px]', rotation: -14, opacity: 0.35 },
    { position: { top: '7%', left: '60%' }, width: 'w-[95px]', mdWidth: 'md:w-[125px]', rotation: 8, opacity: 0.2 },
    { position: { top: '62%', left: '3%' }, width: 'w-[115px]', mdWidth: 'md:w-[145px]', rotation: -7, opacity: 0.3 },
    { position: { top: '68%', right: '5%' }, width: 'w-[105px]', mdWidth: 'md:w-[135px]', rotation: 15, opacity: 0.25 },
    { position: { top: '3%', right: '3%' }, width: 'w-[85px]', mdWidth: 'md:w-[115px]', rotation: -20, opacity: 0.2 },
    { position: { top: '15%', left: '22%' }, width: 'w-[95px]', mdWidth: 'md:w-[125px]', rotation: 25, opacity: 0.15 },
    { position: { bottom: '25%', left: '28%' }, width: 'w-[110px]', mdWidth: 'md:w-[140px]', rotation: -18, opacity: 0.4 },
    
    // New center slogans (6 more)
    { position: { top: '32%', left: '45%' }, width: 'w-[125px]', mdWidth: 'md:w-[155px]', rotation: 7, opacity: 0.35 },
    { position: { top: '43%', left: '30%' }, width: 'w-[105px]', mdWidth: 'md:w-[135px]', rotation: -11, opacity: 0.25 },
    { position: { top: '58%', right: '38%' }, width: 'w-[115px]', mdWidth: 'md:w-[145px]', rotation: 14, opacity: 0.3 },
    { position: { bottom: '42%', right: '33%' }, width: 'w-[100px]', mdWidth: 'md:w-[130px]', rotation: -16, opacity: 0.2 },
    { position: { top: '20%', left: '48%' }, width: 'w-[90px]', mdWidth: 'md:w-[120px]', rotation: 22, opacity: 0.15 },
    { position: { bottom: '35%', left: '50%' }, width: 'w-[110px]', mdWidth: 'md:w-[140px]', rotation: -9, opacity: 0.25 },
  ];

  return (
    <div className="flex flex-col h-screen bg-[rgb(245,151,148)] relative overflow-hidden">
      {/* Background subtle pattern */}
      <BackgroundPattern />
      
      {/* Main logo section - centered horizontally */}
      <div className="absolute top-[1%] left-1/2 transform -translate-x-1/2 z-30 flex flex-col drop-shadow-xl">
        {/* Logo */}
        <BrandLogo />
      </div>
      
      {/* Waitlist Button - top right with better positioning */}
      <div className="absolute top-6 md:top-8 right-6 md:right-10 z-50">
        <WaitlistButton />
      </div>
      
      {/* Render all slogans from the array */}
      {slogans.map((slogan, index) => (
        <SloganElement
          key={index}
          position={slogan.position}
          width={slogan.width}
          mdWidth={slogan.mdWidth}
          rotation={slogan.rotation}
          opacity={slogan.opacity}
        />
      ))}

      {/* Main content area - empty but maintains layout spacing */}
      <div className="flex-1 relative z-10"></div>

      {/* Bottom color strip */}
      <BottomStrip />

      {/* Jars display at bottom - moved down */}
      <div className="absolute w-full bottom-0 left-0 z-30">
        <JarDisplay />
      </div>
    </div>
  );
}
