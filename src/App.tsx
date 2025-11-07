import { FortuneCookie } from "./components/FortuneCookie";
import { BackgroundEffects } from "./components/BackgroundEffects";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-gradient-to-br from-rose-50/90 to-pink-100/90">
      <BackgroundEffects />
      <div className="relative z-10">
        <FortuneCookie />
      </div>
    </div>
  );
}