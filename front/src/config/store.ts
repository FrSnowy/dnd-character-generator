import AppModel from "models/AppModel";
import RegistrationModel from "models/RegistrationModel";
import RoutingStore from "./history";

const rootStore = {
  AppModel,
  RegistrationModel,
  RoutingStore
};

export default rootStore;