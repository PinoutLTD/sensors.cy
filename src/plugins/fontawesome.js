import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowsDownToLine,
  faArrowUpRightFromSquare,
  faBars,
  faBookmark,
  faCheck,
  faCircleInfo,
  faCircleNodes,
  faCircleQuestion,
  faCircleRadiation,
  faCompass,
  faCopy,
  faDownload,
  faDroplet,
  faFaceDizzy,
  faFaceFrownOpen,
  faFaceMeh,
  faFaceSmile,
  faFlask,
  faGear,
  faLocationArrow,
  faLocationDot,
  faSliders,
  faSoap,
  faSort,
  faStopwatch,
  faTemperatureHigh,
  faVial,
  faVialVirus,
  faWind,
  faXmark,
  faShareFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faArrowsDownToLine,
  faArrowUpRightFromSquare,
  faBars,
  faBookmark,
  faCheck,
  faCircleInfo,
  faCircleNodes,
  faCircleQuestion,
  faCircleRadiation,
  faCompass,
  faCopy,
  faCopy,
  faDownload,
  faDroplet,
  faFaceDizzy,
  faFaceFrownOpen,
  faFaceMeh,
  faFaceSmile,
  faFlask,
  faGear,
  faLocationArrow,
  faLocationDot,
  faSliders,
  faSoap,
  faSort,
  faStopwatch,
  faTemperatureHigh,
  faVial,
  faVialVirus,
  faWind,
  faXmark,
  faShareFromSquare,
);

export function useIcons(app) {
  app.component("font-awesome-icon", FontAwesomeIcon);
}
