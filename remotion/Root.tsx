import { Composition } from "remotion";
import { MachineExplainer } from "./MachineExplainer";

const FPS = 30;
const DURATION_SEC = 18;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="PickAndPlace"
      component={MachineExplainer}
      durationInFrames={FPS * DURATION_SEC}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={{
        machineName: "Pick & Place FRITSCH ALL420",
        brand: "FRITSCH",
      }}
    />
  );
};
