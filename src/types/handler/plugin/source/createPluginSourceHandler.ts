import PluginSourceHandlerResponse from "./pluginSourceHandlerResponse";
import BaseHandler from "../../base/baseHandler";
import PluginSourceHandlerArgs from "./pluginSourceHandlerArgs";

type CreatePluginSourceHandler = BaseHandler<PluginSourceHandlerArgs, PluginSourceHandlerResponse> & { }

export default CreatePluginSourceHandler
