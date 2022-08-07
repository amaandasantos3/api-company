import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Company from "../typeorm/entities/Companys";
import { CompanyRepository } from "../typeorm/repositories/CompanyRepository";

interface IRequest {
    id: string;
}

class ShowCompanyService {
    public async execute({id}: IRequest): Promise<Company>{
       const companysRepository = getCustomRepository(CompanyRepository);

       const companys = await companysRepository.findOne(id);

       if(!companys){
        throw new AppError('Nenhuma empresa foi encontrada!')
       }

       return companys;
    }
}

export default ShowCompanyService;