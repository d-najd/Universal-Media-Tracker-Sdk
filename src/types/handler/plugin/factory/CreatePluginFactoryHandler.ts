import BaseHandler from "../../base/BaseHandler";
import PluginFactoryHandlerArgs from "./PluginFactoryHandlerArgs";
import PluginFactoryHandlerResponse from "./PluginFactoryHandlerResponse";

type CreatePluginFactoryHandler = BaseHandler<PluginFactoryHandlerArgs, PluginFactoryHandlerResponse> & { }

export default CreatePluginFactoryHandler
