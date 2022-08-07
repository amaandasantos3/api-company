import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { CompanyRepository } from "../typeorm/repositories/CompanyRepository";

interface IRequest {
    id: string;
}

class DeleteCompanyService {
    public async execute({id}: IRequest): Promise<void>{
       const companysRepository = getCustomRepository(CompanyRepository);

       const companys = await companysRepository.findOne(id);

       if(!companys){
        throw new AppError('Nenhuma empresa foi encontrada!')
       }

       await companysRepository.remove(companys);
    }
}

export default DeleteCompanyService;