import PluginSourceHandlerResponse from "./PluginSourceHandlerResponse";
import BaseHandler from "../../base/BaseHandler";
import PluginSourceHandlerArgs from "./PluginSourceHandlerArgs";

type CreatePluginSourceHandler = BaseHandler<PluginSourceHandlerArgs, PluginSourceHandlerResponse> & { }

export default CreatePluginSourceHandler
