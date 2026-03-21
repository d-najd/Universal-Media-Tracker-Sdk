import CreateResourceHandler from "../createResourceHandler";
import CatalogHandlerArgs from "./catalogHandlerArgs";
import CatalogHandlerResponse from "./catalogHandlerResponse";
import ResourceHandlerType from "../resourceHandlerType";

type CreateCatalogHandler = Omit<
	CreateResourceHandler<CatalogHandlerArgs, CatalogHandlerResponse>,
	'type'
> & {
	type?: ResourceHandlerType | string
}

export default CreateCatalogHandler
