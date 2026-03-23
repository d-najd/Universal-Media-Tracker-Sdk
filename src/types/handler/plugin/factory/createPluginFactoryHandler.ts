import BaseHandler from "../../base/baseHandler";
import PluginFactoryHandlerArgs from "./pluginFactoryHandlerArgs";
import PluginFactoryHandlerResponse from "./pluginFactoryHandlerResponse";

type CreatePluginFactoryHandler = BaseHandler<PluginFactoryHandlerArgs, PluginFactoryHandlerResponse> & { }

export default CreatePluginFactoryHandler
