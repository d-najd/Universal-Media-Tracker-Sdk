import BaseResourceHandler from "../BaseResourceHandler";
import CatalogHandlerArgs from "./CatalogHandlerArgs";
import CatalogHandlerResponse from "./CatalogHandlerResponse";
import ResourceType from "../ResourceType";

type CreateCatalogHandler = BaseResourceHandler<CatalogHandlerArgs, CatalogHandlerResponse> & {
	resourceType: ResourceType | string
}

export default CreateCatalogHandler
