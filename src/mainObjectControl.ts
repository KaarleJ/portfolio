import { camera } from "./main";
import { kaarleControl } from "./objects/kaarle";
import { meteorControl } from "./meteorControl";
import { planetControl } from "./objects/planet";
import { digitMove, digitControl } from "./objects/digit";
import { deathStarMove } from "./objects/deathStar";
import { hopsControl } from "./objects/hops";
import { simplyfoodControl, simplyfoodMove } from "./objects/simplyfood";
import { javaControl } from "./objects/java";

export function mainObjectControl() {
  meteorControl(camera.position.x, camera.position.y, camera.position.z);
  kaarleControl();
  planetControl();
  digitControl();
  hopsControl();
  simplyfoodControl();
  javaControl();
}

export function mainObjectMove(move: number) {
  digitMove(move);
  deathStarMove(move);
  simplyfoodMove(move);
}
