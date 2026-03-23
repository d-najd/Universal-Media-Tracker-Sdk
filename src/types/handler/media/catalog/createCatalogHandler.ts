import BaseResourceHandler from "../baseResourceHandler";
import CatalogHandlerArgs from "./catalogHandlerArgs";
import CatalogHandlerResponse from "./catalogHandlerResponse";
import ResourceType from "../resourceType";

type CreateCatalogHandler = BaseResourceHandler<CatalogHandlerArgs, CatalogHandlerResponse> & {
	resourceType: ResourceType | string
}

export default CreateCatalogHandler
