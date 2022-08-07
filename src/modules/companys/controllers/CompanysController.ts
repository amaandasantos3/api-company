import { Request, Response } from "express";
import ListCompanyService from "../services/ListCompanyService";
import CreateCompanyService from "../services/CreateCompanyService";
import DeleteCompanyService from "../services/DeleteCompanyService";
import ShowCompanyService from "../services/ShowCompanyService";
import UpdateCompanyService from "../services/UpdateCompanyService";

export default class CompanysController {
    public async index(request: Request, response: Response): Promise<Response>  {
        const listCompanys = new ListCompanyService();

        const companys = await listCompanys.execute();

        return response.json(companys);
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const showCompany = new ShowCompanyService();

        const company = await showCompany.execute({ id });

        return response.json(company);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, cnpj, address } = request.body;

        const createCompany = new CreateCompanyService();

        const company = await createCompany.execute({
            name,
            cnpj,
            address,
        });

        return response.json(company);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { name, cnpj, address } = request.body;
        const { id } = request.params;

        const updateCompany = new UpdateCompanyService();

        const company = await updateCompany.execute({
            id,
            name,
            cnpj,
            address,
        });

        return response.json(company);
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteComany = new DeleteCompanyService();

        await deleteComany.execute({ id })

        return response.json([]);
    }
}