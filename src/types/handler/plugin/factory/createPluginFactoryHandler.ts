import BaseHandler from "../../base/baseHandler";
import PluginSourceHandlerResponse from "../source/pluginSourceHandlerResponse";

type CreatePluginFactoryHandler = BaseHandler<PluginSourceHandlerArgs, PluginSourceHandlerResponse> & { }

export default CreatePluginFactoryHandler
