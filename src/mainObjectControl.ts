import { camera } from "./main";
import { kaarleControl } from "./objects/kaarle";
import { meteorControl } from "./meteorControl";
import { planetControl } from "./objects/planet";
import { digitMove, digitControl } from "./objects/digit";
import { deathStarMove } from "./objects/deathStar";
import { hopsControl } from "./objects/hops";
import { simplyfoodControl, simplyfoodMove } from "./objects/simplyfood";
import { javaControl } from "./objects/java";
import { toolBoxControl } from "./objects/toolBox";
import { toolBoxMove } from "./objects/toolBox";

export function mainObjectControl() {
  meteorControl(camera.position.x, camera.position.y, camera.position.z);
  kaarleControl();
  digitControl();
  hopsControl();
  simplyfoodControl();
  planetControl();
  javaControl();
  toolBoxControl();
}

export function mainObjectMove(move: number) {
  console.log("camera(x,y): " + camera.position.x + "," + camera.position.y);
  digitMove(move);
  deathStarMove(move);
  simplyfoodMove(move);
  toolBoxMove(move);
}
